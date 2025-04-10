import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

class Cart extends Model {
  public id!: number;
  public userId!: number;
  public productIds!: number[];
}

Cart.init(
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
  },
  {
    sequelize,
    tableName: 'carts',
  }
);

export { Cart };
