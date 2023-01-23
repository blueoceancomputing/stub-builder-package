interface BuildFromDatabaseTableDefintionOptions {
  applicationName: string;
  databaseName: string;
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