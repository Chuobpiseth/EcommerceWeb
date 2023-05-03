const express=require("express")
const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("home")
})
require("./src/route/customer.route")(app)

app.listen(8080,()=>{
    console.log("http://localhost:8080")
})