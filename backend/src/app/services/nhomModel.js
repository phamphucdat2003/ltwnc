import { DataTypes } from 'sequelize';
import {sequelize} from '../../config/connectDB.js';

const nhomModel = sequelize.define('nhom', {
    ten: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default nhomModel;