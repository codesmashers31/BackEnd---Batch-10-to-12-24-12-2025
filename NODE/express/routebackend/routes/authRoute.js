import express from 'express'
import { createUser  } from '../controllers/userController.js'

// API Link for XXXX Methods - http://localhost:5000/api/route/myroute/user


const route = express.Router()


route.post("/myroute/user",createUser)



export default route