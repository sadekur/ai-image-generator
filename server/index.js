import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Something went wrong';
    return res.status(statusCode).json({ success: false, status: statusCode, message });
});

app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello from CodeX!'
    })
});

const startServer = async () => {
    try {
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'));
    } catch (error) {
        console.log(error);
    }
};

startServer();

// app.post('/', async (req, res) => {
//     try {
//         const prompt = req.body.prompt;

//         const response = await openai.createImage({
//             prompt,
//             n: 1,
//             size: '1024x1024',
//             response_format: 'b64_json',
//         });

//         const image = response.data.data[0].b64_json;
//         res.status(200).send({ photo: image });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send(error?.response.data.error.message);
//     }
// });