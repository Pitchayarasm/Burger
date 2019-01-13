var db = require("../models")

module.exports = function(app) {

    // display burger names list in browser
    app.get("/",function(req,res) {
        db.Burger.findAll()
        .then(function(result) {
            var data = {
                burger : result
            }
            res.render("index",data)
        });
    });

    // Add a new burger
    app.post("/burger",function(req,res) {
        db.Burger.create({
            burger_name : req.body.burger_name
        })
        .then(function(result) {
            res.end();
        })
        .catch(function(err){
            res.status(500).json(err);
        });
    });

    // Change devoured to be true (after click devour it!)
    app.post("/burger/:id", function(req,res) {
        db.Burger.update({
            devoured: req.body.devoured
        },
        {
            where : {
                id : req.params.id
            }
        })
        .then(function(result) {
            res.end();
        });
    });

    // Cancle order
    app.post("/burger/cancle/:id", function(req,res) {
        db.Burger.destroy({
            where : {
                id : req.params.id
            }
        })
        .then(function(result) {
            res.end();
        });
    });
}





  