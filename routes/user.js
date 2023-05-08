const express= require("express")
const users=require("../UserList")
const userRouter=express.Router();

// get user


userRouter.get("/",(req,res)=>res.send({listuser: users}))

userRouter.post("/login",(req,res)=>
{
    let email=req.body.email;
    let password=req.body.password;
    res.send(`My email is ${email} and my password is ${password}`)
}
)

// delete user


// update user
userRouter.get("/boutique",(req,res)=>{
    const date=new Date();
    const hours=date.getHours();
    if ( date> 0  && date < 6 && hours>9  &&  hours<17) {
         res.render("opened");
     }
     else{
         res.render("closed");
     }
  });

  userRouter.get("/home",(req, res) => {
    res.render("home")
})

userRouter.get("/services",(req, res) => {
    res.render("Services")
})
userRouter.get("/contact",(req, res) => {
    res.render("contact")
})

// add  user
module.exports= userRouter;