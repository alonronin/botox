const uuid = require('uuid');

class Botox {
  constructor({engine, integrations, actions}) {
    const sessionId = uuid.v4();
    
    this.sessionId = sessionId;
    this.engine = engine({actions, sessionId});
    this.integrations = integrations || [];
  }

  ask(q) {
    return this.engine.ask(q);
  }
}

module.exports = Botox;
