

const express = require("express");
const bodyparser = require("body-parser");


const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function(req, res)
{
    res.sendFile(__dirname+"/Calculator.html");
});

app.post("/", function(req, res)
{
    var weigth = Number(req.body.weigth);
    var height = Number(req.body.height);

    var result = weigth / Math.pow(height, 2);
    

    res.send("The result is : " + result);
});

//* Server listening
app.listen(3000, function()
{
    console.log("Server started at port 3000");
})