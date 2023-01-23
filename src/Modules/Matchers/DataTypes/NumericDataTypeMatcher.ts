import { InformationSchemaColumn } from "Core/Repository/InformationSchemaRepository.types";
import { injectable } from "inversify";
import { fill } from "lodash";
import { DataType } from "Modules/Entities/DataTypes/DataType";
import { DataTypeContract } from "Modules/Entities/DataTypes/DataTypeContract";
import { NumericalDateType } from "Modules/Entities/DataTypes/NumericalDateType";
import { DataTypeMatcher } from "./DataTypeMatcher";

@injectable()
abstract class NumericDataTypeMatcher extends DataTypeMatcher {
  /**
   * @inheritdoc
   */
  public createDataType(input: InformationSchemaColumn): DataTypeContract {
    const lengthRange = this.getLengthRange(this.formattedDataType, input);
    return new NumericalDateType(
      this.formattedDataType,
      lengthRange[0],
      lengthRange[1],
      input.NUMERIC_PRECISION ?? undefined
    );
  }

  private getLengthRange(dataType: DataType, columnDefintion: InformationSchemaColumn): [number, number] {
    switch (dataType) {
      case DataType.NUMBER:
        return this.parseNumberRange(columnDefintion);

      case DataType.FIXED_POINT_NUMBER:
        return this.parseDecimalRange(columnDefintion)
    }

    return [0, 100];
  }

  private parseNumberRange(columnDefintion: InformationSchemaColumn): [number, number] {
    const columnType = columnDefintion.COLUMN_TYPE;
    const isUnsigned = columnType.includes('unsigned');

    const getMaxSignedValue = (mysqlDataType: string): number => {
      switch (columnDefintion.DATA_TYPE) {
        // Integer values
        case 'tinyint': return 127;
        case 'smallint': return 32767;
        case 'mediumint': return 8388607;
        case 'int': return 2147483647;
        case 'bigint': return 9223372036854775807;
      }
      throw new Error(`Unable to parse the numerical length for "${mysqlDataType}"`);
    }

    /** @todo go back over this ! - (columnDefintion.DATA_TYPE!) */
    const maxValue = getMaxSignedValue(columnDefintion.DATA_TYPE!);
    return isUnsigned ? [0, (maxValue * 2) + 1] : [-maxValue - 1, maxValue];
  }


  private parseDecimalRange(columnDefintion: InformationSchemaColumn): [number, number] {
    if (null === columnDefintion.NUMERIC_PRECISION || null === columnDefintion.NUMERIC_SCALE) {
      throw new Error('ddsf');
    }

    const lhs = this.generateFilledNumber(columnDefintion.NUMERIC_PRECISION - columnDefintion.NUMERIC_SCALE);
    const rhs = this.generateFilledNumber(columnDefintion.NUMERIC_SCALE);
    const value = parseFloat(`${lhs}.${rhs}`);
    return [-value, value];
  }

  private generateFilledNumber(length: number, filling: number = 9): number {
    let array = fill(new Array(length), filling.toString());
    return parseInt(array.join(''));
  }
}

export { NumericDataTypeMatcher }