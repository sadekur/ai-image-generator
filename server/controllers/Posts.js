import Post from '../models/Post.js';
import * as dotenv from 'dotenv';
import { createError } from '../error.js';

dotenv.config();

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        const err = createError(404, error.message);
        res.status(err.status).json({ message: err.message });
    }
}