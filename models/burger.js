module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name : {
            type : DataTypes.STRING,
            allowNull : false,
            validate : {
                len : [2]
            }
        }, 
        devoured : {
            type : DataTypes.BOOLEAN,
            allowNull : false,
            defaultValue : false
        }
    });

    Burger.associate = function(models) {
        Burger.belongsTo(models.Cus, {
          foreignKey: "burgerId"
        });
    };
    return Burger;
};