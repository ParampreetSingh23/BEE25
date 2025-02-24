const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));

let userData = [];

app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname + "/register.html")
})

app.post("/adduser",(req,res)=>{
    let {username , useremail , userpassword} = req.body;
    console.log(username,useremail,userpassword);
    let newuser = {
        name:username,
        email:useremail,
        password:userpassword
    }
    userData.push(newuser);
    res.send(userData);
})
app.listen(3000, () => {
    console.log('Server started');
})
//content-type: application/x-www-form-urlencoded
//body-parser - middleware
//app.use(express.urlencoded({extended:true})) - parses the content into object

