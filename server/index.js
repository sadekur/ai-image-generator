import cors from 'cors';
import mongoose from 'mongoose';
import express from 'express';
import * as dotenv from 'dotenv';
import postRoutes from './routes/Posts.js';
import GenerateImageRoutes from './routes/GenerateImage.js';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/api/posts', postRoutes);
app.use('/api/generateImage', GenerateImageRoutes);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || err.status || 500;
    const message = err.message || 'Something went wrong';
    return res.status(statusCode).json({ success: false, status: statusCode, message });
});

app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello from CodeX!'
    })
});

// Connect to MongoDB
const connectDB = async () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to MongoDB'))
        .catch((error) => { 
            console.log('Error connecting to MongoDB:', error);
            console.log(error) });
};
const startServer = async () => {
    try {
        await connectDB();
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080'));
    } catch (error) {
        console.log(error);
    }
};

startServer();