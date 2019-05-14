module.exports = function(sequelize, DataTypes){
const Img = sequelize.define("Img", {

  url: {
    type: DataTypes.STRING,
    allowNull:false
  }
});

Img.belongsToMany(models.Post, {
  through: 'imgPost',

});
return Img;
}