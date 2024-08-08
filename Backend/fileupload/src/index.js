import express from 'express';
// const fileUploadRoutes = require('./routes/fileUploadRoutes');

const app = express();

// Use file upload routes
// app.use('/api/files', fileUploadRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`File Upload Service is running on port ${PORT}`);
});
