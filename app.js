const { json } = require("express");
const express = require("express");
const app= express ();
const https = require("https");
let items= [];

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.use(express.static("public"));



app.get("/", function(req, res) {
    let today = new Date();
    let options = { weekday: 'long',  month: 'long', day: 'numeric' };
    let day = today.toLocaleDateString("fr-FR", options); // donner un format à la date.
    res.render("list", {kindOfday: day, newListItems : items}); // envoyer la variable items aussi au fich ejs
})
app.post("/", function(req, res) {
   let  item= req.body.task1;
    items.push(item); // stocker la tache de l'utilisateur dans le tableau items
    res.redirect("/");
})
app.listen("3000", function() {
    console.log("server is running on port 3000");
})