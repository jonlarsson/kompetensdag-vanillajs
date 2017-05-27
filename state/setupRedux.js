
APP.store = {
  state: APP.countAppReducer(undefined, {type: "STORE_SETUP"}),
  eventHandlers: [],
  subscribe(eventHandler) {
    this.eventHandlers.push(eventHandler);
    return () => this.eventHandlers.splice(this.eventHandlers.indexOf(eventHandler), 1);
  },

  dispatch(action) {
    this.state = APP.countAppReducer(this.state, action);
    this.eventHandlers.forEach(eventHandler => eventHandler(this.state));
  },

  getState() {
    return this.state;
  }
};
