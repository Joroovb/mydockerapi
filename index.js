// Pakket binnen halen
const express = require("express");

// Applicatie instantieren (constructor)
const app = express();

// Endpoint aanmaken
app.get("/", function(req, res) {
    res.send("Hello, World!");
});

app.listen(4321);

console.log("Hello, World!");