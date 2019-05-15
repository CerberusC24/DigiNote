module.exports = function(sequelize, DataTypes){

  const Video = sequelize.define("Video", {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    }  
    });
   
    Video.belongsToMany(models.Post, {
      through: 'videoPost',
      
  });
  return Video;
};