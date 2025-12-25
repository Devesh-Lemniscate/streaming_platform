import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


export const connectToDatabase = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("Connected to MongoDB successfully!");
        console.log("Database Host:", connectionInstance.connection.host);
        //console.log("Connection instance:\n", connectionInstance);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}