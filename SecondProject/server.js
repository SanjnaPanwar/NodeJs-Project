const express  = require("express")
const { router } = require("./Router/routs")
const app = express()
app.use(express.json())
app.use("/",router)

app.listen(3001,()=>{
    console.log("listening");
})