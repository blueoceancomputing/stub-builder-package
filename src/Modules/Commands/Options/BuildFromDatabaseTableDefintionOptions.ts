interface BuildFromDatabaseTableDefintionOptions {
  application: string;
  database: string;
  tableName?: string | undefined;
}

interface BuildFromDatabaseTableDefintionResolvedOptions {
  // application: string;
  // database: string;
  // tableName?: string | undefined;
}

export {
  BuildFromDatabaseTableDefintionOptions,
  BuildFromDatabaseTableDefintionResolvedOptions
}