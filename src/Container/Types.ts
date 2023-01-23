export default {
  Api: Symbol.for('Api'),
  Command: Symbol.for('Command'),
  Config: Symbol.for('Config'),

  // Applications
  Application: Symbol.for('Application'),
  ApplicationFactory: Symbol.for('ApplicationFactory'),

  // Core/Database
  DatabaseDialect: Symbol.for('DatabaseDialect'),
  DatabaseFactory: Symbol.for('DatabaseFactory'),
  DatabaseHandleFactory: Symbol.for('DatabaseHandleFactory'),

  // Modules/Matchers
  DataTypeMatcher: Symbol.for('DataTypeMatcher'),
  RelationshipMatcher: Symbol.for('RelationshipMatcher'),

  // Modules/Processors
  TableProcessor: Symbol.for('TableProcessor'),

  // Modules/Transformers
  ColumnTransformer: Symbol.for('ColumnTransformer'),
  DataTypeTransformer: Symbol.for('DataTypeTransformer'),
  RelationshipTransformer: Symbol.for('RelationshipTransformer'),

  // Stubber
  StubBuilder: Symbol.for('StubBuilder'),
  StubBuilderFactory: Symbol.for('StubBuilderFactory'),
};
