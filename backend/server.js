import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';


import { PORT } from './config/envVars.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});
app.use('/api/v1/auth', authRouter);





app.listen(PORT, () => {
  
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});