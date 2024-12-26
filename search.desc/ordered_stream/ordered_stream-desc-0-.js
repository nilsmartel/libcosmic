searchState.loadedDescShard("ordered_stream", 0, " \nThe unordered data carried by this stream\nA stream for the <code>filter</code> function.\nA stream for the <code>filter_map</code> function.\nAn <code>OrderedStream</code> wrapper around an <code>OrderedFuture</code>.\nAn <code>OrderedStream</code> wrapper around a <code>Stream</code>.\nAn <code>OrderedStream</code> wrapper around a <code>Stream</code>.\nAn <code>OrderedStream</code> wrapper around a <code>Stream</code>.\nAn <code>OrderedStream</code> that tracks if the underlying stream …\nA <code>Stream</code> for the <code>into_ordering</code> function.\nA <code>Stream</code> for the <code>into_stream</code> function.\nA <code>Stream</code> for the <code>into_tuple_stream</code> function.\nAn item with a corresponding ordering token.\nA stream for the <code>join</code> function.\nJoin a collection of <code>OrderedStream</code>s.\nJoin a collection of pinned <code>OrderedStream</code>s.\nA stream for the <code>map</code> function.\nA stream for the <code>map_item</code> function.\nA stream for the <code>map_ordering</code> function.\nA value that is either borrowed or owned.\nA future for the <code>next</code> function.\nA future for the <code>next_before</code> function.\nThis stream will not return any items prior to the given …\nA <code>Future</code> that produces an item with an associated ordering.\nA stream that produces items that are ordered according to …\nHelpers for chaining <code>OrderedStream</code>s.\nThe type ordered by this stream.\nSee <code>OrderedStream::Ordering</code>.\nSee <code>OrderedStream::Data</code>.\nA stream for the <code>peekable</code> function.\nThe result of a <code>OrderedStream::poll_next_before</code> operation.\nThis stream is terminated and should not be polled again.\nA stream for the <code>then</code> function.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nExtract the data from the result.\nConvert to source stream.\nConvert to source stream.\nConvert to source stream.\nConvert to source stream.\nConvert to source stream.\nConvert into the source stream.\nSplit into the source streams.\nConvert this into a <code>Stream</code>, keeping only the ordering …\nConvert this into a <code>Stream</code>, keeping only the ordering …\nConvert this into a <code>Stream</code>, discarding the ordering …\nConvert this into a <code>Stream</code>, discarding the ordering …\nExtract the item from the result.\nConvert this into a <code>Stream</code>, keeping the ordering objects.\nConvert this into a <code>Stream</code>, keeping the ordering objects.\nReturns <code>true</code> if the stream should no longer be polled.\nJoin two streams while preserving the overall ordering of …\nApply a closure to the data.\nApply a closure to the data.\nApply a closure to the data.\nApply a closure to the items that has access to the …\nApply a closure to the items that has access to the …\nApply a closure to the items that can change the type of …\nApply a closure to the items that can change the type of …\nCreate a new <code>OrderedStream</code> by applying a <code>split_item</code> …\nCreate a new <code>OrderedStream</code> by applying a <code>split_item</code> …\nCreate a new <code>OrderedStream</code> by applying a <code>split_item</code> …\nReturn the next item in this stream.\nReturn the next item in this stream.\nReturn a <code>PollResult</code> corresponding to the next item in the …\nReturn a <code>PollResult</code> corresponding to the next item in the …\nAllow access to the buffered item, if any.\nAttempt to pull out the value of this future, registering …\nAttempt to pull out the next value of this stream, …\nPeek on the next item in the stream\nThe minimum value of the ordering for any future items.\nThe minimum value of the ordering of the item.\nReturns the bounds on the remaining length of the stream.\nProvide direct access to the underlying stream.\nProvide direct access to the underlying stream.\nRemove the buffered item, if one is present.\nApply a closure that produces a <code>Future</code> to items, running …\nApply a closure that produces a <code>Future</code> to items, running …\nExtract the error of a <code>Result</code> item.\nExtract the error and ordering from a <code>Result</code> item.\nHelper function to simplify the creation of a stream when …\nHelper function to simplify the creation of a stream when …")