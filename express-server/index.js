// const express = require("express");
// const  data  = require('./data');
import express from "express";
import path from "path";
import { connectDB } from './dbConnection.js';
// const path = require("path");
const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded()); // forms data converted into json format



let PORT = 5000;
// app.set("view engine", "ejs"); // setting view engine
// let arr = [];

// let data = [
//   {
//     id: 1,
//     name: "Aarav Sharma",
//     email: "aarav.sharma@example.com",
//     role: "admin",
//     isActive: true,
//   },
//   {
//     id: 2,
//     name: "Meera Patel",
//     email: "meera.patel@example.com",
//     role: "user",
//     isActive: true,
//   },
//   {
//     id: 3,
//     name: "Rohan Singh",
//     email: "rohan.singh@example.com",
//     role: "user",
//     isActive: false,
//   },
//   {
//     id: 4,
//     name: "Priya Iyer",
//     email: "priya.iyer@example.com",
//     role: "moderator",
//     isActive: true,
//   },
//   {
//     id: 5,
//     name: "Vikram Das",
//     email: "vikram.das@example.com",
//     role: "user",
//     isActive: false,
//   },
// ];

// app.get("/", (req, res) => {
//   // res.send('Welcome to Express Server');
//   res.render("index", { arr }); // rendering index.ejs file and passing arr to it
//   // res.send(arr)
// });

// app.get("/user", (req, res) => {
//   res.send("Welcome users page of Express Server");
// });

// app.get("/data", (req, res) => {
//   res.send(data);
// });

// app.post("/userData", (req, res) => {
//   console.log(req.body);
//   arr.push(req.body);
//   res.redirect("/");
//   // res.send(req.body);
// });

// // we can send whole page using sendFile method
// app.get("/index", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/user/get", (req, res) => {
//   res.send(data);
// });

// app.post("/user/post", (req, res) => {
//   data.push(req.body);
//   console.log(req.body);
//   res.send({ message: "data added successfully" });
// });

// app.put("/user/update/:id", (req, res) => {
//   const dataId = parseInt(req.params.id);
//   const user = data.findIndex((u) => u.id === dataId);
//   if (user === -1) {
//     return res.status(404).send({ message: "User not found" });
//   }
//   data[user] = { ...data[user], ...req.body };
//   console.log(req.body);
//   res.send({ message: "data updated successfully", user });
// });

// app.delete("/user/delete/:id", (req, res) => {
//   const dataId = parseInt(req.params.id);
//   const user = data.findIndex((u) => u.id === dataId);
//   console.log(user);
//   if (user === -1) {
//     return res.status(404).send({ message: "User not found" });
//   }
//   const deletedUser = data.splice(user, 1);
//   res.send({ message: "data deleted successfully", deletedUser });
// });

app.listen(PORT, () => {
  console.log("server is running on port 5000");
});
