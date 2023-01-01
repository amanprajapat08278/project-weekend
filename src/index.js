const express = require("express")
const mongoose = require("mongoose")
const route = require("./route")
const app = express()

app.use(express.json())

mongoose.set('strictQuery', false)

mongoose.connect("mongodb+srv://amanprajapat82780:Lucky82780@newproject.3qdy8y3.mongodb.net/group15Database?retryWrites=true&w=majority",{
    useNewUrlParser:true
}).then(()=>console.log("Mongoose Connected"))
.catch((err)=>console.log(err))

app.use("/", route)

app.listen(3000, ()=>{
    console.log("Server is running on ", 3000)
})