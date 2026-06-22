import * as dotenv from 'dotenv';
import { createError } from '../error.js';
import fetch from 'node-fetch';

dotenv.config();

export const generateAIImage = async (req, res, next) => {
    try {
        const { prompt } = req.body;
        const response = await fetch(
            "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ inputs: prompt }),
            }
        );

        const buffer = await response.arrayBuffer();
        const base64 = Buffer.from(buffer).toString("base64");
        return res.status(200).json({ success: true, photo: base64 });

    } catch (error) {
        next(createError(500, error.message || 'Failed to generate image'));
    }
}