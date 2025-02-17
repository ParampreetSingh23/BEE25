const express=require("express");
const app=express();

//app.get("/profile",(req,res)=>{
//    const {username} =req.query;
//    res.send("profile page of "+" " + username)
//})

app.get("/profile",(req,res)=>{
    const {username, age , address} =req.query;
    res.send("profile page of "+" " + username + " " + age + " " + address)
})

let userData=[
   {
     id:1,
     name :"amit",
     address : "fdk"
   },
   {
        id:2,
        name : "arti",
        address : "bti"
   },
   {
        id:3,
        name : "abhinav",
        address :"fzr"
   }
]
//bhejna - get
app.get("/allusers",(req,res)=>{
    res.send(userData);
})

app.get("/getuserbyId",(req,res)=>{
    let {id} = req.query;
    for(let i = 0 ; i<userData.length ; i++){
         if(userData[i].id == id){
            return res.send(userData[i])
         }
    }
    res.send("user not found")
})

app.get("/deleteuserId",(req,res)=>{
 let {id} = req.query;
 for(let i = 0;i<userData.length;i++){
  if(userData[i].id==id){
   userData.splice(i,1);
   return res.send("user deleted")
  }
  res.send("No user found")
 }

})
app.get("/add",(req,res)=>{

const { id, name, address } = req.query;


userData.push({
    id,
    name,
    address
});
res.send("Added")
})
app.listen(3002,()=>{
    console.log("Server started");
})