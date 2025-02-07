import express, { json } from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';
import { connect } from 'mongoose';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import commentRoutes from './routes/commentRoutes.js';
import googleRoutes from './routes/googleAuthRoutes.js';
import subscribersRoutes from './routes/subscribersRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();
const app = express();

// middlewares
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use('/uploads',express.static(path.join(__dirname,'uploads/')));
app.use('/',authRoutes);
app.use('/',postRoutes);
app.use('/',commentRoutes);
app.use('/',userRoutes);
app.use('/',googleRoutes);
app.use('/',subscribersRoutes);


// database connection
connect(process.env.MONGO_URL)
.then(()=>console.log('Database connected'))
.catch((err)=>console.log(err));

const port = process.env.PORT || 3000;

app.listen(port, console.log(`server is running on port ${port}`));