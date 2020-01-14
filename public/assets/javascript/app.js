

$(function(){
    $(".submit-burgers").on("submit", function(event){
       
     console.log("hello world");
        event.preventDefault();

       const newBurger = {

            burger_name: $("#text-input").val().trim(),
            devoured: 0
       };
       $.ajax("/api/burgers", {
           type: "POST",
           data: newBurger
       }).then(
           function(){
               console.log("let see new burger");
               location.reload();
           }
       );
    })


$(".devburger").on("click", function(event) {
    console.log("hello world");
    event.preventDefault();
    const id = $(this).data("id");

    
    const newBurgerState = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("changed burger state");
        location.reload();
      }
    );
  });

});

