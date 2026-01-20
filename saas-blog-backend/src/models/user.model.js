import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lower: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    avatar: {
        type: String
    },
    verified: {
        type: Boolean,
        default: false
    },
    verifyCode: {
        type: String,
        select: false
    },
    verifyCodeExpiry: {
        type: Date,
        select: false
    }
}, { timestamps: true });

export const UserModel = mongoose.model('User', UserSchema);

