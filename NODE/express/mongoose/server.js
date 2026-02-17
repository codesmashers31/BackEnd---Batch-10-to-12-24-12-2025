import express from 'express'
import dotenv from 'dotenv'
import contectDB from './config/db.js'
dotenv.config()
contectDB()

const app = express()



const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server Succfully done http://localhost:${PORT}`);
    
})


