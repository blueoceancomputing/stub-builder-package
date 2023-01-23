import { ColumnContract } from "./ColumnContract";
import { RelationshipContract } from "./RelationshipContract";

interface TableContract {
    databaseName: string;
    tableName: string;
    columns: Array<ColumnContract>;
    relationships: Array<RelationshipContract>;
}

export { TableContract };