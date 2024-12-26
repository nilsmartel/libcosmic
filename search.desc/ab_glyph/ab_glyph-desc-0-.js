searchState.loadedDescShard("ab_glyph", 0, "API for loading, scaling, positioning and rasterizing …\nA grayscale bitmap with 2 bits per pixel.\nA packed grayscale bitmap with 2 bits per pixel.\nA grayscale bitmap with 4 bits per pixel.\nA packed grayscale bitmap with 4 bits per pixel.\nA grayscale bitmap with 8 bits per pixel.\nA monochrome bitmap.\nA packed monochrome bitmap.\nA color bitmap with 32 bits per pixel.\nCubic Bézier curve from <code>.0</code> to <code>.3</code> using <code>.1</code> as the control …\nFunctionality required from font data.\n<code>Font</code> implementor that wraps another concrete <code>Font + &#39;static</code>…\nFont data handle stored as a <code>&amp;[u8]</code> + parsed data. See <code>Font</code> …\nFont data handle stored in a <code>Vec&lt;u8&gt;</code>  + parsed data. See …\nA glyph with pixel scale &amp; position.\nGlyph id.\nOld version of <code>v2::GlyphImage</code>.\nValid formats for a <code>GlyphImage</code>.\nInvalid font data error.\nStraight line from <code>.0</code> to <code>.1</code>.\nA “raw” collection of outline curves for a glyph, …\nGlyph outline primitives.\nA glyph that has been outlined at a scale &amp; position.\nAn (x, y) coordinate.\nPixel scale.\n2D scale factors for use with unscaled metrics.\nA <code>Font</code> and an associated pixel scale.\nQuadratic Bézier curve from <code>.0</code> to <code>.2</code> using <code>.1</code> as the …\nA rectangle, with top-left corner at <code>min</code>, and bottom-right …\nA <code>Font</code> with an associated pixel scale. This can be used to …\nLogic for variable fonts.\nAdd rhs.x to x, rhs.y to y.\nConstruct a <code>PxScaleFont</code> by associating with the given …\nConstruct a <code>PxScaleFont</code> by associating with the given …\nExtracts a slice containing the data passed into e.g. …\nPixel scaled glyph ascent. See glyph layout concepts.\nPixel scaled glyph ascent. See glyph layout concepts.\nUnscaled glyph ascent. See glyph layout concepts.\nUnscaled bounding box.\nReturns an iterator of all distinct <code>(GlyphId, char)</code> pairs. …\nReturns an iterator of all distinct <code>(GlyphId, char)</code> pairs. …\nUnscaled &amp; unpositioned outline curves.\nRaw image data, not a bitmap in the case of …\nRaw image data, it should be rendered or decompressed (in …\nThe default coordinate value for the axis.\nPixel scaled glyph descent. See glyph layout concepts.\nPixel scaled glyph descent. See glyph layout concepts.\nUnscaled glyph descent. See glyph layout concepts.\nDraw this glyph outline using a pixel &amp; coverage handling …\nThe last glyph ID, <em>inclusive</em>, for the range covered by …\nReturns a font reference.\nExtracts a slice containing the data passed into e.g. …\nExtracts a slice containing the data passed into e.g. …\nFormat of the raw data.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nUniform scaling where x &amp; y are the same.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGlyph info.\nReturns the layout bounds of this glyph.\nReturns the layout bounds of this glyph.\nReturns the layout bounds of this glyph.\nReturns the layout bounds of this glyph.\nThe number of glyphs present in this font. Glyph …\nThe number of glyphs present in this font. Glyph …\nThe number of glyphs present in this font. Glyph …\nLookup a <code>GlyphId</code> matching a given <code>char</code>.\nLookup a <code>GlyphId</code> matching a given <code>char</code>.\nLookup a <code>GlyphId</code> matching a given <code>char</code>.\nReturns a pre-rendered image of the glyph.\nReturns a pre-rendered image of the glyph.\nReturns a pre-rendered image of the glyph.\nReturns raw SVG data of a range of glyphs which includes …\nReturns raw SVG data of a range of glyphs which includes …\nPixel scaled horizontal advance for a given glyph. See …\nPixel scaled horizontal advance for a given glyph. See …\nUnscaled horizontal advance for a given glyph id. See …\nScale factor for unscaled font horizontal values.\nScale factor for unscaled font horizontal values.\nPixel scaled horizontal side bearing for a given glyph. …\nPixel scaled horizontal side bearing for a given glyph. …\nUnscaled horizontal side bearing for a given glyph id. See …\nPixel scaled height <code>ascent - descent</code>. See glyph layout …\nPixel scaled height <code>ascent - descent</code>. See glyph layout …\nUnscaled height <code>ascent - descent</code>. See glyph layout concepts…\nUnscaled height <code>ascent - descent</code>. See glyph layout concepts…\nWhether the axis should be exposed directly in user …\nGlyph id.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMove into a <code>PxScaleFont</code> associated with the given pixel …\nMove into a <code>PxScaleFont</code> associated with the given pixel …\nUnwraps the data passed into e.g. <code>FontVec::try_from_vec</code>.\nReturns additional pixel scaled kerning to apply for a …\nReturns additional pixel scaled kerning to apply for a …\nReturns additional unscaled kerning to apply for a …\nPixel scaled line gap. See glyph layout concepts.\nPixel scaled line gap. See glyph layout concepts.\nUnscaled line gap. See glyph layout concepts.\nThe maximum coordinate value for the axis.\nThe minimum coordinate value for the axis.\nUnicode name.\nExample\nConstructs an <code>OutlinedGlyph</code> from the source <code>Glyph</code>, pixel …\nOffset of the image from the normal origin (top at the …\nCompute unscaled glyph outline curves &amp; bounding box.\nCompute glyph outline ready for drawing.\nCompute glyph outline ready for drawing.\nCompute glyph outline ready for drawing.\nCompute glyph outline ready for drawing.\n<code>Point</code> constructor.\nPosition of this glyph.\nConverts pt units into <code>PxScale</code>.\nConverts pt units into <code>PxScale</code>.\nConvert unscaled bounds into pixel bounds at a given scale …\nConservative whole number pixel bounding box for this …\nReturns a <code>PxScale</code> with both x &amp; y scale values set to the …\nReturns the pixel scale associated with this font.\nPixel scale of this glyph.\nCurrent scale of the image in pixels per em.\nConstruct a <code>Glyph</code> with the font’s pixel scale at …\nConstruct a <code>Glyph</code> with the font’s pixel scale at …\nSets a variation axis coordinate value by it’s tag.\nThe first glyph ID for the range covered by this record.\nSubtract rhs.x from x, rhs.y from y.\nTag identifying the design variation for the axis.\nCreates an <code>FontArc</code> from a byte-slice.\nCreates an <code>FontRef</code> from a byte-slice.\nCreates an <code>FontRef</code> from byte-slice.\nCreates an <code>FontVec</code> from owned data.\nCreates an <code>FontArc</code> from owned data.\nCreates an <code>FontVec</code> from owned data.\nGet the size of the font unit\nPixel scaled vertical advance for a given glyph.\nPixel scaled vertical advance for a given glyph.\nUnscaled vertical advance for a given glyph id.\nScale factor for unscaled font vertical values.\nScale factor for unscaled font vertical values.\nPixel scaled vertical side bearing for a given glyph.\nPixel scaled vertical side bearing for a given glyph.\nUnscaled vertical side bearing for a given glyph id.\nReturns variation axes.\nConstruct a <code>Glyph</code> with given scale and position …\nConstruct a <code>Glyph</code> with given scale &amp; position.\nHorizontal scale in pixels.\nVertical scale in pixels.\nA pre-rendered image of a glyph, usually used for emojis …\nRaw image data, see <code>format</code>.\nFormat of the raw <code>data</code>.\nReturns the argument unchanged.\nImage height.\nCalls <code>U::from(self)</code>.\nOffset of the image from the normal origin (top at the …\nPixels per em of the selected strike.\nImage width.")