import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema({
    title: {
        type: String
    },
    content: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, { timestamps: true });

export const PostModel = mongoose.model('Post', PostSchema);

