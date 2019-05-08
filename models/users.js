const users = (sequelize, DataTypes) => {
  let users = sequelize.define("users", {
    fullName: {
      type: DataTypes.STRING(255),
      allownNull: false
    },
    username: {
      type: DataTypes.STRING(255),
      allownNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  });

  // users.associate = models => {
  //   models.users.hasMany(models.pollings);
  // };
  return users;
};

module.exports = users;
