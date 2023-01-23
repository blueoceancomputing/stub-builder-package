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
  RelationshipMatcher: Symbol.for('RelationshipMatcher'),

  // Modules/Transformers
  DataTypeTransformer: Symbol.for('DataTypeTransformer'),
  RelationshipTransformer: Symbol.for('RelationshipTransformer'),
};
