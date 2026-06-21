import Post from '../models/Posts.js';
import * as dotenv from 'dotenv';
import { createError } from '../error.js';

dotenv.config();

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