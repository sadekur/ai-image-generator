import * as dotenv from 'dotenv';
import { createError } from '../error.js';
import fetch from 'node-fetch';

dotenv.config();

export const generateAIImage = async (req, res, next) => {
    try {
        const { prompt } = req.body;
        
        const encodedPrompt = encodeURIComponent(prompt);
        const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1024&height=1024&nologo=true`;

        // Fetch the image and convert to base64
        const response = await fetch(imageUrl);
        if (!response.ok) {
            return next(createError(502, `Pollinations API returned ${response.status}`));
        }
        const buffer = await response.arrayBuffer();
        const base64 = Buffer.from(buffer).toString("base64");

        return res.status(200).json({ success: true, photo: base64 });

    } catch (error) {
        next(createError(500, error.message || 'Failed to generate image'));
    }
}