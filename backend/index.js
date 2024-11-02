import express from "express"
import {PORT, mongoDBURL} from "./config.js"
import mongoose from "mongoose"
import bookRoutes from "./routes/bookRoutes.js"
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())
// app.use(cors({
//     origin : "http://localhost:5174",
//     methods : ['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
// }))

app.get('/', (request,response) =>{
    console.log(request)
    return response.status(234).send("Hello World")
})

app.use("/books",bookRoutes)

mongoose.connect(mongoDBURL).then(() => {
    console.log("Database is connected successfully")
    app.listen(PORT , () => {
        console.log(`App is listening to port : ${PORT}`)
    })
}).catch((error) => {
    console.log("Database is not connected")
    console.log(error)
})