import userModel from "./userModel.js";
import nhomModel from './nhomModel.js';
import sanphamModel from './sanphamModel.js';


nhomModel.hasMany(sanphamModel, {
    foreignKey: 'typeId',
});
sanphamModel.belongsTo(nhomModel, {
    foreignKey: 'typeId',
});




export { userModel, nhomModel, sanphamModel };