import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL ?? '');
        console.log("DB connected successfully!");

    } catch (error) {
        console.log(`Error while connecting to DB ${error}`);
    }
};

export default connectDB;
