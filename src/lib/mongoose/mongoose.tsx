import mongoose, { Mongoose } from "mongoose"
import { Mongo_URL } from './db';

if (!Mongo_URL) {
    throw new Error('Please add your Mongo URI to .env');
}

declare global {
    var mongoose: {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
    };
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase(): Promise<Mongoose> {

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(Mongo_URL, {
                serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of 30 seconds
                bufferCommands: false, // Disable mongoose buffering
            }).then((mongoose) => {
                console.log('Successfully connected to the database');
                return mongoose;
            }).catch ((error) => {
                console.error(`Failed to connect to the database after multiple attempts`, error);
                throw new Error(`Failed to connect to the database`);
            });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectToDatabase;