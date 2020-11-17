import * as Mongoose from "mongoose";
import { MongoosePlugin } from 'express-api-problem';

const StudentSchema: Mongoose.Schema = new Mongoose.Schema(
    {
        firstName: {
            type: String,
            trim: true
        },
        lastName: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        registrationNumber: {
            type: Number,
            required: true
        },
        isEnabled: {
            type: Boolean,
        }
    },
    {
        strict: false,
        versionKey: false,
        bufferCommands: false,
        validateBeforeSave: true,
        timestamps: true,
    },
);

export default StudentSchema;
