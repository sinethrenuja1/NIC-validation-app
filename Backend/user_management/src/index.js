import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import registerRoutes from './routes/registerRoute.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/registerRoutes', registerRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`User Management Service running on port ${PORT}`);
});
