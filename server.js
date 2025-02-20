const express = require("express");
const app = express();

// Profile Route with Parameters
app.get("/profile/:username/:age/:address", (req, res) => {
    const { username, age, address } = req.params;
    res.send(`Profile page of ${username} ${age} ${address}`);
});

// Sample user data
let userData = [
    { id: 1, name: "amit", address: "fdk" },
    { id: 2, name: "arti", address: "bti" },
    { id: 3, name: "abhinav", address: "fzr" }
];

// Get all users
app.get("/allusers", (req, res) => {
    res.send(userData);
});

// Get user by ID
app.get("/getuserbyId/:id", (req, res) => {
    let { id } = req.params;
    //id = parseInt(id); // Convert ID to integer

    for (let i = 0; i < userData.length; i++) {
        if (userData[i].id === id) {
            return res.send(userData[i]);
        }
    }
    res.send("User not found");
});

// Delete user by ID
app.get("/deleteuserById/:id", (req, res) => {
    let { id } = req.params;
    //id = parseInt(id);

    for (let i = 0; i < userData.length; i++) {
        if (userData[i].id === id) {
            userData.splice(i, 1); // Remove user from array
            return res.send("User deleted");
        }
    }
    res.send("No user found to delete");
});

// Add new user
app.get("/addUser/:id/:name/:address", (req, res) => {
    let { id, name, address } = req.params;
    //id = parseInt(id);

    let newUser = { id, name, address };
    userData.push(newUser);
    res.send("New user added successfully");
});

// Start server
app.listen(3002, () => {
    console.log("Server started on port 3002");
});