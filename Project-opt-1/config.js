// const mongoose = require('mongoose');
// const connect = mongoose.connect("mongodb://localhost:27017/Login-tut");

// // Check database connected or not
// connect.then(() => {
//     console.log("Database Connected Successfully");
// })
// .catch(() => {
//     console.log("Database cannot be Connected");
// })

// // Create Schema
// const Loginschema = new mongoose.Schema({
//     name: {
//         type:String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// // collection part
// const collection = new mongoose.model("users", Loginschema);

// // module.exports = collection;


function authenticate() {
    const username = document.getElementById("signin_email").value;
    const password = document.getElementById("signin_password").value;

    // Replace with your actual authentication logic
    if (username === "komal" && password === "s123") {
        window.location.href = "index.html"; // Redirect to index page
    } else {
        alert("Invalid credentials. Please try again.");
    }
}


function authenticate() {
    const username = document.getElementById("signin_email").value;
    const password = document.getElementById("signin_password").value;

    // Replace with your actual authentication logic
    if (username === "now" && password === "k321") {
        window.location.href = "index.html"; // Redirect to index page
    } else {
        alert("Invalid credentials. Please try again.");
    }
}