import mongoose from "mongoose";
import colors from "colors";


const connectDb = async()=>{

    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`database is connected: ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`mongodb error: ${error}`.bgRed.white);
    }
}

export default connectDb;