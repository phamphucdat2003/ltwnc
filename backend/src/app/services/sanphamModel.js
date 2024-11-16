import { DataTypes } from 'sequelize';
import {sequelize} from '../../config/connectDB.js';


const sanphamModel = sequelize.define('sanpham', {
    ten: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gia: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hinhanh: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    mota: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    idnhom: {
      type: DataTypes.INTEGER,
      allowNull: true,
  },
});

export default sanphamModel;