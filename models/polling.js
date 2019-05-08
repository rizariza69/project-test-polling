const pollings = (sequelize, DataTypes) => {
  let pollings = sequelize.define("pollings", {
    userId: {
      type: DataTypes.INTEGER(20),
      allownNull: false
    },
    question: {
      type: DataTypes.STRING(255),
      allownNull: false
    },
    timeLimit: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
  // pollings.associate = models => {
  //   models.pollings.belongsTo(models.pollings);
  // };

  return pollings;
};

module.exports = pollings;
