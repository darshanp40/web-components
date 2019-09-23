/*  
    someProperty.hasChanged - All declared properties have a function, hasChanged, which
     is called whenever the property is set; if hasChanged returns true, an update is scheduled.
*/
myProp: { hasChanged(newVal, oldVal) {
  // compare newVal and oldVal
  // return `true` if an update should proceed
}}

/* 
    requestUpdate: If hasChanged returned true, requestUpdate fires, and the update proceeds.
    To manually start an element update, call requestUpdate with no parameters.
    @param: propertyName = Name of property to be updated.
    @param oldValue = Previous property value.
    @returnValue Promise = Returns the updateComplete Promise, which resolves on completion of the update.
    Property changes inside this method will not trigger an element update.
*/
// Call from within a custom property setter
this.requestUpdate(propertyName, oldValue);

/* 
    performUpdate - By default, performUpdate is scheduled as a microtask after the end of the next execution
     of the browser event loop. To schedule performUpdate, implement it as an asynchronous method that awaits some state before calling super.performUpdate(). For example:
*/
