import express  from "express";
import cors from "cors"
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModels.js";
import booksroutes from "./routes/booksroutes.js" ;

const app = express() ;
const corsOptions = {
  origin: ['http://localhost:5173'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};

app.use(express.json());
app.use(cors(corsOptions));

// app.use(express.urlencoded({ extended: true }))

app.use(booksroutes)
// app.use(cors({
//   origin: " http://localhost:5173",
//   methods: ["GET","POST","PUT","DELETE"] ,
//   allowedHeaders : ["Content-Type"]
// }))

// app.use(cors())



// test
app.get("/", (req,res)=> {
  console.log(req)
  return res.status(200).send("welcome to mern fullstack tutorial")
});


mongoose
.connect(mongoURL)
.then(()=> {
console.log("app connected to database")
app.listen(PORT , ()=> {
    console.log(`app listening on port ${PORT}` )
})
})
.catch((err)=>{
console.log(err)
})



