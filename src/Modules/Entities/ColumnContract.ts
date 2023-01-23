import { DataTypeContract } from "./DataTypes/DataTypeContract";

interface ColumnContract {
    columnName: string;
    isPrimary: boolean;
    isNullable: boolean;
    dataType: DataTypeContract;
}

export { ColumnContract };