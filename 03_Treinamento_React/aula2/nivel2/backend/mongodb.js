import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

try { //De uma olhada em try catch !!!
    await mongoose.connect(process.env.CONNECTION_STRING)

    console.log('Connected to your db')
} catch (error) {
    console.log(error)
}

export default mongoose