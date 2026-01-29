
import mongoose from 'mongoose';
import { RedisClient } from "bun";
import { Database } from "bun:sqlite";

export const mongo = async () => {

    const mongoUri = process.env.MONGO_URI as string;
    const dbName = process.env.MONGO_DB_NAME as string;
    let status = '';

    if (!mongoUri) status = 'Failed';
    if (!dbName) status = 'Failed';

    try {
        const connect = await mongoose.connect(mongoUri as string, {
            dbName: dbName,
        });

        // Use mongoose.connection.readyState to determine connection status
        // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
        switch (mongoose.connection.readyState) {
            case 0:
                status = 'Disconnected';
                break;
            case 1:
                status = 'Connected';
                break;
            case 2:
                status = 'Connecting';
                break;
            case 3:
                status = 'Disconnecting';
                break;
            default:
                status = 'Failed';
                break;
        }

        return {
            mongo: connect,
            status: status
        };
    } catch (error) {
        console.log(error);
        return {
            mongo: null,
            status: 'Failed'
        };
    }
}

export const redis = async () => {

    const redisUri = process.env.REDIS_URI;
    let status = '';

    if (!redisUri) status = 'Failed';

    try {
        const client = new RedisClient(process.env.REDIS_URI as string);

        client.onconnect = async () => {
            status = 'Connected';
        };

        await client.connect();

        return client;

    } catch (error) {
        console.log(error);
        return {
            redis: null,
            status: 'Failed'
        };
    }
}

export const sqlite = ()=> {
    const db = new Database("./translation.sqlite");
    return db;
}

export const s3 = async ()=> {

}