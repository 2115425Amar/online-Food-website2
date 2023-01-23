const express = require("express");

const app = express();
const port = 5000;

app.get("/", function(req, res){
   res.sendFile(__dirname+"/index.html");
});
app.listen(port, function(){
    console.log("The application started successfully on port ${port}");
});