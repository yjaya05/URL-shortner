const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/",function(request,response){
    response.sendFile(__dirname + "/public/index.html");
});

app.listen(5000);