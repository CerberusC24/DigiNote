module.exports = function(sequelize, DataTypes){

  const video = sequelize.define("video", {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  return video;
};