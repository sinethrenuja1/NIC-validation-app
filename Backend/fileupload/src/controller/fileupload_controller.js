import multer from 'multer';
import path from 'path';
import axios from 'axios';

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).array('files', 4);

// Ensure the 'uploads' directory exists
const fs = require('fs');
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Controller function for uploading files
exports.uploadFiles = (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to upload files.' });
    }

    if (req.files.length !== 4) {
      return res.status(400).json({ error: 'Exactly four CSV files must be uploaded.' });
    }

    try {
      // Prepare file paths for NIC Validation Service
      const filePaths = req.files.map(file => path.join(__dirname, '../', file.path));

      // Send files to NIC Validation Service (replace with actual service URL)
      const validationResponse = await axios.post('http://nic-validation-service/validate-nics', {
        files: filePaths,
      });

      res.status(200).json({ message: 'Files uploaded and sent for validation.', data: validationResponse.data });
    } catch (error) {
      console.error('Error during file upload and validation:', error);
      res.status(500).json({ error: 'Failed to process the uploaded files.' });
    }
  });
};
