const express=require("express");

const app=express();


app.use(express.json());
//  EJS  template engine
app.set("view engine","ejs");

app.use("/user",require("./routes/user"));


// start the server
 app.listen(5003,(err)=>
err?console.log(err):console.log("server is runing"));




