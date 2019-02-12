let _ai;

const botox = {
  _actions: {},
  ai(ai) {
    _ai = ai(this);
    return this;
  },
  integrations(arr) {
    return this;
  },
  actions(actions) {
    this._actions = actions;
    return this;
  },
  train() {
    return this;
  },
  init() {
    return {
      ask: async str => {
        return await _ai.ask(str);
      }
    };
  }
};

module.exports = botox;
