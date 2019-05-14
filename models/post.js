module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

   User.associate = (models) => {
    
    Post.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });

    Post.belongsToMany(models.Book, {
      through: 'BookPost',
    });

    Post.belongsToMany(models.Video, {
      through: 'VideoPost',
    });

    Post.belongsToMany(models.Img, {
      through: 'ImgPost',
    });

    Post.belongsToMany(models.Song, {
      through: 'SongPost',
    });


  };

  return Post;
};