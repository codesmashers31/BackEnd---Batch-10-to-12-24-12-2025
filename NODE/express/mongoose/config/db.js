import mongoose from "mongoose";

const contectDB = async ()=>{


    try {

        const conn = await mongoose.connect(process.env.MONGO_URL)
        
        //console.log(conn);
        
        console.log(`DataBase Connected Successfully ${conn.connection.host}`)
        
        // console.log(`DataBase Connected Successfully`)
    } catch (error) {

        console.log('something error',error);
        
        
    }

}

export default contectDB;