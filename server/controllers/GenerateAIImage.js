import * as dotenv from 'dotenv';
import { createError } from '../error.js';
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateAIImage = async (req, res, next) => {
    try {
        const { prompt } = req.body;
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt,
            n: 1,
            size: "1024x1024",
            response_format: "b64_json",
        });
        const image = response.data[0].b64_json;
        return res.status(200).json({ success: true, data: image });
    } catch (error) {
        next(createError(
            error.status || 500,
            error?.response?.data?.error?.message || error.message || 'Failed to generate image'));
    }
}