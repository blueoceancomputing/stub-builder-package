export interface Dictionary {
  constructor: {
      name: 'RowDataPacket'
  };
  [column: string]: any;
  [column: number]: any;
}