const express = require('express')
const connect = require("./connections/connect")

const app = express()
app.use(express.json())


app.listen(5000,()=>console.log("App up at 5000"))