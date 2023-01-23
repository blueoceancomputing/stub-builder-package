interface DatabaseConnectionConfig {
  database: string;
  host: string;
  port: number;
  user: string;
  password: string;
  multipleStatements: boolean;
}

interface DatabaseConfig {
  dialect: string;
  connection: DatabaseConnectionConfig
}

export { DatabaseConfig }