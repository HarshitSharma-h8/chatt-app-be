import mongoose from "mongoose";
const DB_NAME = process.env.DB_NAME || "ChatAppDB"
const dbConnection = async()=>{
    try {
        const connInst = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`📦 MongoDB connected !! DB HOST : ${connInst.connection.host}`);
    } catch (error) {
        console.error("📦 MONGODB connection FAILED :", error)
        process.exit(1)
    }
}

export default dbConnection