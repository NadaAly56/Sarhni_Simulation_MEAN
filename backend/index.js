import { dbConnection } from "./database/dbConnection.js";
import express from 'express'
import { userRouter } from "./src/modules/users/user.router.js";
import dotenv from 'dotenv'
const app = express()

app.use(express.json())
app.use('/user', userRouter)
dotenv.config()
dbConnection()
app.listen(process.env.PORT, ()=> {
    console.log('Server started');
})