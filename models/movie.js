module.exports = function (sequelize, DataTypes) {

  const Movie = sequelize.define("Movie", {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Movie.associate = (models) => {
    Movie.belongsToMany(models.Post, {
      through: 'MoviePost',
      onDelete: "cascade"
    });
  };
  return Movie;
};