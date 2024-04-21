import { Column, DataType, Model, Table } from 'sequelize-typescript';

export interface DealCreationAttr {
  title: string;
  sum: number;
  tiket: number;
  yield: number;
  sold: number;
  daysLeft: number;
  imgPath: string;
}

@Table({ tableName: 'Deal' })
export class Deal extends Model<Deal, DealCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  title: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  sum: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  tiket: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  yield: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  sold: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  daysLeft: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  imgPath: string;
}
