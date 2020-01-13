

const express = require("express");
const exphbs = require ("express-handlebars");

app = express ();
const PORT = process.env.PORT || 2020;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");


app.get("/", function (req, res){

     res.render("index")
     
     // testing the server here 
    // res.send("hiii my app!");
})

// const routes = require("./controllers/burgers_controller");

// app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})