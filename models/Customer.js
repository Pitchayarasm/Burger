module.exports = function(sequelize, DataTypes) {
    var Cus = sequelize.define("Cus", {
      name: {
        type: DataTypes.STRING,
        validate: {
          len: [1]
        }
      }
    });
    
    return Cus;
};