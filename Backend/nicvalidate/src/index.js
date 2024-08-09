// import express from 'express';
// import bodyParser from 'body-parser';
// import nicValidationRoutes from './routes/nicValidationRoutes.js';

// const app = express();
// const PORT = 3001;

// // Middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Routes
// app.use('/api/nic', nicValidationRoutes);

// // Start the server
// app.listen(PORT, () => {
//   console.log(`NIC Validation Service is running on port ${PORT}`);
// });


import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// import nicValidationRoutes from './routes/nicValidationRoutes.js';

const app = express();
const PORT = process.env.PORT || 3004;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
// app.use('/api/nic', nicValidationRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`NIC Validation Service is running on port ${PORT}`);
});