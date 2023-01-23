import { InformationSchemaRepository } from "Core/Repository/InformationSchemaRepository";

interface TableProcessorOptions {
  informationSchemaRepository: InformationSchemaRepository;
  databaseName: string;
  tableName: string;
}

export { TableProcessorOptions }