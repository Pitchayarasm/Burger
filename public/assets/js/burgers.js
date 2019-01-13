$(document).ready(function() {

    // create a new burger
    $("#submitBurger").on("click", function(event) {
        console.log("click")
        event.preventDefault();
        var newBurger = {
            burger_name : $("#body").val().trim()
        };
        $.post("/burger" , newBurger 
        ,function(){
            console.log("New Burger Added!")
            location.reload();
        })
        .fail(function(err){
            alert("Please input your favorite burger..")
        });
    });

    // after click devored a burger
    $(".dev").on("click", function(event) {
        var id = $(this).data("id");
        var status = {
            devoured : true
        }
        $.post("/burger/" + id , status 
        ,function() {
            console.log("Someone eats a burger")
            location.reload();
        })
    });

});