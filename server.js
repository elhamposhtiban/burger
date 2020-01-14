

const express = require("express");
const exphbs = require ("express-handlebars");

app = express ();
const PORT = process.env.PORT || 2020;

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");


 const router = require("./controllers/burgers_controller");


 app.use(router);


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})