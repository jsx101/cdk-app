const express = require("express");
const app = express();

app.get("/hello", (req, res)=> {
    res.send("hello");
});

app.get("/hello/:name", (req,res)=>{
    if(req.params.name === "Janet") {
        res.send("Go away, Janet!");
    }
    res.send(`Hello, ${req.params.name}`);
});

app.get("/health", (req, res)=> {
    res.send("healthy");
});

app.listen(80, () => {
    console.log("App listening on port 80!");
  });