const express=require("express")
// const {sendemail} =require('./controller/sendEmail');
const dotenv=require('dotenv').config();
const cors=require('cors')
const bodyParser=require('body-parser');
const main = require("./dbConnection/dbConnection");


const app=express();
main();
const PORT=process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
res.json({message:"password-reset server"})
})



//router
app.use("/auth",require("./routes/Authroute"));

app.listen(PORT,()=>{
    console.log(`server started ${PORT}`
   )
    })


