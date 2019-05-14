module.exports = function(sequelize, DataTypes) {

  const songs = sequelize.define("songs", {
    artist: {
      type: DataTypes.STRING,

      allowNull: false, 
    }, 
    title: {
      type: DataTypes.STRING,

      allowNull:false,
    },
    date: {
      type: DataTypes.STRING, 
    }
  });
  return songs;
};