import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import { connectDB } from './config/db.js';
import patientRoutes from './routes/patient.route.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const app = express();
const port = 5000;

// MIDDLEWARE
app.use(express.json()); // accepts json data to req.body
app.use(cors());
app.use('/api/patients', patientRoutes )
app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)), 'public')));

app.listen(port, () => {
    connectDB();
    console.log(`Server is listening at: http://localhost:${port}`);
})
