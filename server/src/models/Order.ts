import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Order extends Model {
  public id!: number;
  public userId!: number;
  public productIds!: number[];
  public status!: string;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productIds: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'orders',
  }
);

export { Order };
