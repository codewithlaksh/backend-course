import mongoose from "mongoose";

const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB !! Host:', connection.connections[0].host);
    } catch (error) {
        throw error;
    }
}

export { dbConnect };