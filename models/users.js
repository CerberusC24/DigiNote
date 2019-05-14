Modules.export = function(sequelize, DataTypes){
  const User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING
    }

  });
  User.associate = function(models) {
    // associating users with posts
    User.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return User;
};
