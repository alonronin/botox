const uuid = require('uuid');

class Botox {
  constructor({ actions } = {}) {
    this.state = {};
    this.state.actions = actions;
    this.state.engine = undefined;
    this.state.sessionId = uuid.v4();
  }
  
  engine(engine) {
    this.state.engine = engine(this);
    return this;
  }

  integrations(arr = []) {
    return this;
  }
  
  actions(actions) {
    this.state.actions = actions;
    return this;
  }

  init() {
    return {
      ask: async (str) => {
        return await this.state.engine.ask(str);
      }
    }
  }
}

module.exports = Botox;
