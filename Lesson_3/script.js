
// var express = require('express');
// const { read } = require('fs');
// var app = express()

// app.get("/", (req, res)=>{
//     res.send("<h1>Cool Hacker</h1>")
// })

// app.get("/names/:name", (req, res)=>{
//     let name = req.params.name
//     res.send(`Hello ${name}`)
// })

// app.get("/google", (req, res)=>{
//     res.redirect('http://google.com')
// })
// app.get("/google/:search", (req, res)=>{
//     let search = req.params.search
//     res.redirect(`https://google.com/search?q=${search}`)
// })

// app.get("/*", (req, res)=>{
//     res.send("404")
// })

// app.listen(3000, ()=>{
//     console.log("Port: 3000")
// })



var fs = require('fs')
// fs.appendFileSync("my.txt", "hello dude")
// fs.appendFileSync("my.txt", "hello men")

var obj = {
    name: "Ara",
    age: 23,
    email: "ara.@gmail.com"
}

fs.appendFileSync("my.txt", JSON.stringify(obj))