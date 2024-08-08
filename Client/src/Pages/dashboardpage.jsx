const Dashboardpage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-700 ml-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Upload CSV Files</h2>
          <p className="mt-2 text-sm text-gray-600">Please upload four CSV files</p>
        </div>
        <form className="space-y-6">
          <div>
            <label htmlFor="csv1" className="block text-sm font-medium text-gray-700">CSV File 1</label>
            <input
              type="file"
              id="csv1"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              accept=".csv"
            />
          </div>
          <div>
            <label htmlFor="csv2" className="block text-sm font-medium text-gray-700">CSV File 2</label>
            <input
              type="file"
              id="csv2"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              accept=".csv"
            />
          </div>
          <div>
            <label htmlFor="csv3" className="block text-sm font-medium text-gray-700">CSV File 3</label>
            <input
              type="file"
              id="csv3"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              accept=".csv"
            />
          </div>
          <div>
            <label htmlFor="csv4" className="block text-sm font-medium text-gray-700">CSV File 4</label>
            <input
              type="file"
              id="csv4"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              accept=".csv"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Upload Files
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboardpage;



// const Dashboardpage=()=> {
//   return (
//     <div>
//           <div className="min-h-screen flex items-center justify-center bg-gray-700  ml-8">
//                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//               <div className="text-center mb-6">
//                 <h2 className="text-3xl font-bold text-gray-900">Upload CSV Files</h2>
//                 <p className="mt-2 text-sm text-gray-600">Please upload four CSV files</p>
//               {/* </div> */}
//               <form className="space-y-6">
//                 <div>
//                   <label htmlFor="csv1" className="block text-sm font-medium text-gray-700">CSV File 1</label>
//                   <input
//                     type="file"
//                     id="csv1"
//                     className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                     accept=".csv"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="csv2" className="block text-sm font-medium text-gray-700">CSV File 2</label>
//                   <input
//                     type="file"
//                     id="csv2"
//                     className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                     accept=".csv"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="csv3" className="block text-sm font-medium text-gray-700">CSV File 3</label>
//                   <input
//                     type="file"
//                     id="csv3"
//                     className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                     accept=".csv"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="csv4" className="block text-sm font-medium text-gray-700">CSV File 4</label>
//                   <input
//                     type="file"
//                     id="csv4"
//                     className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                     accept=".csv"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                 >
//                   Upload Files
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>  
    
//   )
// }

// export default Dashboardpage