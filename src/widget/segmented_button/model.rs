// Copyright 2022 System76 <info@system76.com>
// SPDX-License-Identifier: MPL-2.0

use std::collections::VecDeque;

use super::selection_modes::{MultiSelect, Selectable, SingleSelect};
use super::SegmentedItem;
use slotmap::{SecondaryMap, SlotMap};

slotmap::new_key_type! {
    /// A unique ID for a segmented button
    pub struct Key;
}

/// A model for single-select button selection.
pub type SingleSelectModel<Component> = Model<SingleSelect, Component>;

/// A model for multi-select button selection.
pub type MultiSelectModel<Component> = Model<MultiSelect, Component>;

/// The model held by the application, containing the unique IDs of each item and their respective contents.
#[derive(Default)]
pub struct Model<SelectionMode, Component> {
    pub(super) widget: WidgetModel<SelectionMode>,
    pub(super) app: AppModel<Component>,
}

/// The portion of the model used only by the application.
pub struct AppModel<Component>(SecondaryMap<Key, Component>);

impl<Component> Default for AppModel<Component> {
    fn default() -> Self {
        Self(SecondaryMap::default())
    }
}

/// The portion of the model useful to the widget.
#[derive(Default)]
pub struct WidgetModel<SelectionMode> {
    /// The content used for drawing segmented items.
    pub(super) items: SlotMap<Key, SegmentedItem>,

    /// Order which the items will be displayed.
    pub(super) order: VecDeque<Key>,

    /// Manages selections
    pub(super) selection: SelectionMode,
}

impl<Component> Model<SingleSelect, Component> {
    /// Activates the item in the model.
    pub fn activate(&mut self, key: Key) {
        self.widget.selection.active = key;
    }

    /// Get an immutable reference to the component associated with the active item.
    #[must_use]
    pub fn active_component(&self) -> Option<&Component> {
        self.component(self.active())
    }

    /// Get a mutable reference to the component associated with the active item.
    #[must_use]
    pub fn active_component_mut(&mut self) -> Option<&mut Component> {
        self.component_mut(self.active())
    }

    /// Deactivates the active item.
    pub fn deactivate(&mut self) {
        self.widget.selection.active = Key::default();
    }

    /// The ID of the active item.
    #[must_use]
    pub fn active(&self) -> Key {
        self.widget.selection.active
    }
}

impl<Component> Model<MultiSelect, Component> {
    /// Activates the item in the model.
    pub fn activate(&mut self, key: Key) {
        if !self.widget.selection.active.insert(key) {
            self.widget.selection.active.remove(&key);
        }
    }

    /// Deactivates the item in the model.
    pub fn deactivate(&mut self, key: Key) {
        self.widget.selection.active.remove(&key);
    }

    /// The IDs of the active items.
    pub fn active(&self) -> impl Iterator<Item = Key> + '_ {
        self.widget.selection.active.iter().copied()
    }
}

impl<SelectionMode, Component> Model<SelectionMode, Component>
where
    SelectionMode: Selectable,
{
    /// Creates a builder for initializing a model.
    #[must_use]
    pub fn builder() -> ModelBuilder<SelectionMode, Component> {
        ModelBuilder(Self {
            widget: WidgetModel::default(),
            app: AppModel::default(),
        })
    }

    /// Convenience method for batching multiple operations
    #[must_use]
    pub fn batch(&mut self) -> Batch<SelectionMode, Component> {
        Batch(self)
    }

    /// Get an immutable reference to an item in the model.
    #[must_use]
    pub fn content(&self, key: Key) -> Option<&SegmentedItem> {
        self.widget.items.get(key)
    }

    /// Get a mutable reference to an item in the model.
    #[must_use]
    pub fn item_mut(&mut self, key: Key) -> Option<&mut SegmentedItem> {
        self.widget.items.get_mut(key)
    }

    /// Get an immutable reference to a component associated with an item.
    pub fn component(&self, key: Key) -> Option<&Component> {
        self.app.0.get(key)
    }

    /// Get a mutable reference to a component associated with an item.
    pub fn component_mut(&mut self, key: Key) -> Option<&mut Component> {
        self.app.0.get_mut(key)
    }

    /// Insert a new item in the model.
    pub fn insert(&mut self, content: impl Into<SegmentedItem>, component: Component) -> Key {
        let key = self.widget.items.insert(content.into());
        self.widget.order.push_back(key);
        self.app.0.insert(key, component);
        key
    }

    /// Inserts and activates an item into the model.
    pub fn insert_active(
        &mut self,
        content: impl Into<SegmentedItem>,
        component: Component,
    ) -> Key {
        let key = self.insert(content, component);
        self.widget.selection.activate(key);
        key
    }

    /// Checks if the item is active in the model.
    #[must_use]
    pub fn is_active(&self, key: Key) -> bool {
        self.widget.selection.is_active(key)
    }

    /// The position of the item in the model.
    pub fn position(&self, key: Key) -> Option<usize> {
        self.widget.order.iter().position(|k| *k == key)
    }

    /// Removes an item from the model.
    pub fn remove(&mut self, key: Key) {
        self.widget.items.remove(key);
        self.widget.selection.deactivate(key);
        self.app.0.remove(key);

        if let Some(index) = self.position(key) {
            self.widget.order.remove(index);
        }
    }

    /// Swap the position of two items in the model.
    pub fn swap_position(&mut self, first: Key, second: Key) {
        let Some(first_index) = self.position(first) else {
            return
        };

        let Some(second_index) = self.position(second) else {
            return
        };

        self.widget.order.swap(first_index, second_index);
    }
}

pub struct ModelBuilder<SelectionMode, Component>(Model<SelectionMode, Component>);

impl<SelectionMode: Selectable, Component> ModelBuilder<SelectionMode, Component> {
    /// Inserts a new item and its associated component into the model.
    #[must_use]
    pub fn insert(mut self, content: impl Into<SegmentedItem>, component: Component) -> Self {
        self.0.insert(content, component);
        self
    }

    /// Inserts and activates an new item.
    #[must_use]
    pub fn insert_active(
        mut self,
        content: impl Into<SegmentedItem>,
        component: Component,
    ) -> Self {
        self.0.insert_active(content, component);
        self
    }

    pub fn build(self) -> Model<SelectionMode, Component> {
        self.0
    }
}

/// Convenience type for batching multiple operations
pub struct Batch<'a, SelectionMode, Component>(&'a mut Model<SelectionMode, Component>);

impl<'a, SelectionMode: Selectable, Component> Batch<'a, SelectionMode, Component> {
    /// Insert a new button.
    #[must_use]
    pub fn insert(self, content: impl Into<SegmentedItem>, component: Component) -> Self {
        self.0.insert(content, component);
        self
    }

    /// Inserts and activates a button.
    #[must_use]
    pub fn insert_active(self, content: impl Into<SegmentedItem>, component: Component) -> Self {
        self.0.insert_active(content, component);
        self
    }

    /// Removes a button.
    pub fn remove(&mut self, key: Key) {
        self.0.remove(key);
    }
}