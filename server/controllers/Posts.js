import Post from '../models/Posts.js';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import { createError } from '../error.js';

dotenv.config();

// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        next(createError(
            error.status,
            error?.response?.data?.error?.message || 500, error.message || 'Failed to fetch posts'));
    }
}

export const createPost = async (req, res, next) => {
    try {
        const { name, prompt, photo } = req.body;
        const photoUrl = await cloudinary.uploader.upload(photo, { folder: 'ai-image-generator' });
        const newPost = await Post.create({ name, prompt, photo: photoUrl.secure_url });
        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        next(createError(
            error.status,
            error?.response?.data?.error?.message || 500, error.message || 'Failed to create post'));
    }
}