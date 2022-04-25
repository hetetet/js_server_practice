//This is the entry point for our whole application

var express =require("express");

var app=express();

var count=0;

app.get("/usernumber/",(req,res)=>{
    count++;
    res.send("Hello World! Uer number:"+count.toString());
});

app.get("/",(req,res)=>{

    res.send("MAIN PAGE");
});

app.get("/user/:id",(req,res)=>{

    var dummyData={
        userid:req.params["id"],
        username:"user",
        wins:1972,
        losses: 1121,
        array:[
            {name: "a",age: 100},
            {name: "b",age: 200},
            {name: "c",age: 400},
            {name: "d",age: 800}
        ]
    };

    //JSON 

    res.json(dummyData);
});

app.listen(8000, ()=>{
    console.log("Server has started!");
});
