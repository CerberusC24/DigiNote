module.exports = function (sequelize, DataTypes) {

  const Video = sequelize.define("Video", {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Video.associate = (models) => {
    Video.belongsToMany(models.Post, {
      through: 'VideoPost',
    });
  };
  return Video;
};