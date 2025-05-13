import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import positionsRoutes from './routes/positionsRoutes';
import newsRoutes from './routes/newsRoutes';
import staffRoutes from './routes/staffRoutes';
import { connectToDatabase } from './utils/db';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
connectToDatabase();

// Routes
app.use('/api/positions', positionsRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/staff', staffRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});