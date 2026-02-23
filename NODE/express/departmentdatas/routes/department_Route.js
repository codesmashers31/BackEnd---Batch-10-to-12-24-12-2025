import express from 'express'
import { added,deletedata,get, getByID, updatedata } from '../controllers/departmentController.js';



const route = express.Router()

route.post("/add",added)
route.get("/get",get)
route.get("/getbyId/:userid",getByID)
route.put("/updateData/:userid",updatedata)
route.delete("/deleteData/:userid",deletedata)

export default route;