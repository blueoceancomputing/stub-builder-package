export type RelationshipContract = {
  /** The table to join */
  joinTable: string;

  /** The column within the table it is joining with */
  joinColumn: string;

  /** The local column name within this table that the repository represents */
  localColumn: string;
};

export declare type RelationshipsContract<T extends Record<string, unknown> = never> = Record<keyof T, RelationshipContract>;
