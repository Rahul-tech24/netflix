import mongoose from "mongoose";
import { MONGODB_URI } from "./envVars.js";

export const connectDB = () =>
    mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    });
;
export default mongoose;