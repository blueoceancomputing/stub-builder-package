export default {
  Api: Symbol.for('Api'),
  Application: Symbol.for('Application'),
  Command: Symbol.for('Command'),
  Config: Symbol.for('Config'),

  // Core/Database
  DatabaseDialect: Symbol.for('DatabaseDialect'),
  DatabaseFactory: Symbol.for('DatabaseFactory'),
  DatabaseHandleFactory: Symbol.for('DatabaseHandleFactory'),

  // Modules/Matchers
  DataTypeMatcher: Symbol.for('DataTypeMatcher'),

  // Modules/Transformers
  DataTypeTransformer: Symbol.for('DataTypeTransformer'),
};
