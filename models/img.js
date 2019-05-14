module.exports = function(sequelize, DataTypes){
const img = sequelize.define("img", {

  url: {
    type: DataTypes.STRING,
    allowNull:false
  }
});
return img;
}