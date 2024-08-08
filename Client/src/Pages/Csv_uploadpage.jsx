import  { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length !== 4) {
      setErrorMessage('Please upload exactly four CSV files.');
      return;
    }
    setFiles(acceptedFiles);
    setErrorMessage('');
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.csv',
    multiple: true,
  });

  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Files uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <div
        {...getRootProps({
          className:
            'border-2 border-dashed border-gray-300 p-6 rounded-md text-center cursor-pointer',
        })}
      >
        <input {...getInputProps()} />
        <p>Drag & drop exactly four CSV files here, or click to select files</p>
      </div>
      {errorMessage && (
        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
      )}
      <div className="mt-4">
        <h4 className="text-lg font-semibold mb-2">Selected Files:</h4>
        <ul className="list-disc list-inside">
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={handleUpload}
        disabled={files.length !== 4}
        className={`mt-4 w-full py-2 px-4 rounded ${
          files.length === 4
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        Upload Files
      </button>
    </div>
  );
};

export default FileUpload;


// import { useState } from 'react';
// import axios from 'axios';

// const DashboardPage = () => {
//   const [files, setFiles] = useState({
//     csv1: null,
//     csv2: null,
//     csv3: null,
//     csv4: null,
//   });
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleFileChange = (e) => {
//     const { id, files } = e.target;
//     setFiles((prevState) => ({
//       ...prevState,
//       [id]: files[0],
//     }));
//   };

//   const handleUpload = async (e) => {
//     e.preventDefault();
    
//     // Check if all files are uploaded
//     const { csv1, csv2, csv3, csv4 } = files;
//     if (!csv1 || !csv2 || !csv3 || !csv4) {
//       setErrorMessage('Please upload all four CSV files.');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file1', csv1);
//     formData.append('file2', csv2);
//     formData.append('file3', csv3);
//     formData.append('file4', csv4);

//     try {
//       const response = await axios.post('/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       console.log('Files uploaded successfully:', response.data);
//       setErrorMessage(''); // Clear error message on successful upload
//     } catch (error) {
//       console.error('Error uploading files:', error);
//       setErrorMessage('There was an error uploading the files. Please try again.');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-bold text-gray-900">Upload CSV Files</h2>
//           <p className="mt-2 text-sm text-gray-600">Please upload four CSV files</p>
//         </div>
//         <form className="space-y-6" onSubmit={handleUpload}>
//           <div>
//             <label htmlFor="csv1" className="block text-sm font-medium text-gray-700">CSV File 1</label>
//             <input
//               type="file"
//               id="csv1"
//               className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//               accept=".csv"
//               onChange={handleFileChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="csv2" className="block text-sm font-medium text-gray-700">CSV File 2</label>
//             <input
//               type="file"
//               id="csv2"
//               className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//               accept=".csv"
//               onChange={handleFileChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="csv3" className="block text-sm font-medium text-gray-700">CSV File 3</label>
//             <input
//               type="file"
//               id="csv3"
//               className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//               accept=".csv"
//               onChange={handleFileChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="csv4" className="block text-sm font-medium text-gray-700">CSV File 4</label>
//             <input
//               type="file"
//               id="csv4"
//               className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//               accept=".csv"
//               onChange={handleFileChange}
//             />
//           </div>
//           {errorMessage && (
//             <p className="text-red-500 text-sm">{errorMessage}</p>
//           )}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             Upload Files
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;



