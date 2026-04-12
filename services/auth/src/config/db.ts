import mongoose from "mongoose"

export const connectDb = async ()=> {
    try {
         await mongoose.connect(process.env.DATABASE_URL!)
         console.log("Database connected!")
    } catch (error) {
        
    }
}