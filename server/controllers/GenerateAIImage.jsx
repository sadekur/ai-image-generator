import * as dotenv from 'dotenv';
import { createError } from '../error.js';
import { Configuration, OpenAI, OpenAIApi } from "openai";


dotenv.config();

// Setup OpenAI configuration

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);