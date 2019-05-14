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

  Post.associate = function(models) {
    // saying that the post is conencted ot the user
    Post.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  // Post.associate = (models) => {
  //   Post.belongsToMany(models.Groups, {
  //     through: 'GroupUsers',
  //     as: 'groups',
  //     foreignKey: 'userId'
  //   });
  // };

  return Post;
};
