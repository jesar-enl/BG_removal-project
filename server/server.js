import connectDB from './configs/mongodb.js';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());
await connectDB();

app.get('/',(req, res) => res.send('API working well.'))

app.listen(PORT, () => console.log('Server running on port ' + PORT))