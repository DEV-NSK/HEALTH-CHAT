

// // // src/components/DocumentUpload/DocumentUpload.jsx
// // import React, { useCallback, useState } from 'react';
// // import { useApp } from '/src/contexts/AppContext';
// // import { FiUpload, FiFile } from 'react-icons/fi';

// // const DocumentUpload = () => {
// //   const [isDragging, setIsDragging] = useState(false);
// //   const { uploadDocument } = useApp();

// //   const handleDrag = useCallback((e) => {
// //     e.preventDefault();
// //     e.stopPropagation();
// //   }, []);

// //   const handleDragIn = useCallback((e) => {
// //     e.preventDefault();
// //     e.stopPropagation();
// //     setIsDragging(true);
// //   }, []);

// //   const handleDragOut = useCallback((e) => {
// //     e.preventDefault();
// //     e.stopPropagation();
// //     setIsDragging(false);
// //   }, []);

// //   const handleDrop = useCallback((e) => {
// //     e.preventDefault();
// //     e.stopPropagation();
// //     setIsDragging(false);
    
// //     const files = Array.from(e.dataTransfer.files);
// //     handleFiles(files);
// //   }, []);

// //   const handleFileSelect = (e) => {
// //     const files = Array.from(e.target.files);
// //     handleFiles(files);
// //   };

// //   const handleFiles = async (files) => {
// //     for (const file of files) {
// //       if (isValidFileType(file)) {
// //         await uploadDocument(file);
// //       }
// //     }
// //   };

// //   const isValidFileType = (file) => {
// //     const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
// //     return allowedTypes.includes(file.type) || file.name.endsWith('.pdf') || file.name.endsWith('.docx') || file.name.endsWith('.txt');
// //   };

// //   return (
// //     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 h-full flex flex-col">
// //       <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Upload Documents</h2>
      
// //       <div
// //         className={`flex-1 border-2 border-dashed rounded-lg p-4 text-center transition-colors duration-200 flex items-center justify-center ${
// //           isDragging
// //             ? 'border-healthcare-primary bg-healthcare-light dark:bg-healthcare-dark'
// //             : 'border-gray-300 dark:border-gray-600 hover:border-healthcare-primary'
// //         }`}
// //         onDragEnter={handleDragIn}
// //         onDragLeave={handleDragOut}
// //         onDragOver={handleDrag}
// //         onDrop={handleDrop}
// //       >
// //         <div>
// //           <FiUpload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
// //           <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
// //             Drop documents here
// //           </p>
// //           <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
// //             PDF, DOCX, TXT files
// //           </p>
          
// //           <input
// //             type="file"
// //             multiple
// //             accept=".pdf,.docx,.txt"
// //             onChange={handleFileSelect}
// //             className="hidden"
// //             id="file-upload"
// //           />
// //           <label
// //             htmlFor="file-upload"
// //             className="inline-flex items-center px-3 py-1 bg-healthcare-primary text-white rounded-lg 
// //                      hover:bg-healthcare-secondary cursor-pointer transition-colors duration-200 text-sm"
// //           >
// //             <FiFile className="w-3 h-3 mr-1" />
// //             Choose Files
// //           </label>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DocumentUpload;



















// // src/components/DocumentUpload/DocumentUpload.jsx
// import React, { useCallback, useState } from 'react';
// import { useApp } from '/src/contexts/AppContext';
// import { FiUpload, FiFile } from 'react-icons/fi';

// const DocumentUpload = () => {
//   const [isDragging, setIsDragging] = useState(false);
//   const { uploadDocument } = useApp();

//   // ... (keep all the existing drag and drop handlers)

//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
//       <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Upload Documents</h2>
      
//       <div
//         className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors duration-200 ${
//           isDragging
//             ? 'border-healthcare-primary bg-healthcare-light dark:bg-healthcare-dark'
//             : 'border-gray-300 dark:border-gray-600 hover:border-healthcare-primary'
//         }`}
//         onDragEnter={handleDragIn}
//         onDragLeave={handleDragOut}
//         onDragOver={handleDrag}
//         onDrop={handleDrop}
//       >
//         <FiUpload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//         <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
//           Drop documents here
//         </p>
//         <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
//           PDF, DOCX, TXT files
//         </p>
        
//         <input
//           type="file"
//           multiple
//           accept=".pdf,.docx,.txt"
//           onChange={handleFileSelect}
//           className="hidden"
//           id="file-upload"
//         />
//         <label
//           htmlFor="file-upload"
//           className="inline-flex items-center px-3 py-2 bg-healthcare-primary text-white rounded-lg 
//                    hover:bg-healthcare-secondary cursor-pointer transition-colors duration-200 text-sm"
//         >
//           <FiFile className="w-4 h-4 mr-1" />
//           Choose Files
//         </label>
//       </div>
//     </div>
//   );
// };

// export default DocumentUpload;





















// src/components/DocumentUpload/DocumentUpload.jsx
import React, { useCallback, useState } from 'react';
import { useApp } from '/src/contexts/AppContext';
import { FiUpload, FiFile } from 'react-icons/fi';

const DocumentUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const { uploadDocument } = useApp();

  // Drag and drop handlers
  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragIn = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragOut = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  }, []);

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    handleFiles(files);
  };

  const handleFiles = async (files) => {
    for (const file of files) {
      if (isValidFileType(file)) {
        await uploadDocument(file);
      }
    }
  };

  const isValidFileType = (file) => {
    const allowedTypes = [
      'application/pdf', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
      'text/plain'
    ];
    const allowedExtensions = ['.pdf', '.docx', '.txt'];
    
    return allowedTypes.includes(file.type) || 
           allowedExtensions.some(ext => file.name.toLowerCase().endsWith(ext));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Upload Documents</h2>
      
      <div
        className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors duration-200 ${
          isDragging
            ? 'border-healthcare-primary bg-blue-50 dark:bg-blue-900/20'
            : 'border-gray-300 dark:border-gray-600 hover:border-healthcare-primary'
        }`}
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <FiUpload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
        <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
          Drop documents here
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
          PDF, DOCX, TXT files
        </p>
        
        <input
          type="file"
          multiple
          accept=".pdf,.docx,.txt"
          onChange={handleFileSelect}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="inline-flex items-center px-3 py-2 bg-healthcare-primary text-white rounded-lg 
                   hover:bg-healthcare-secondary cursor-pointer transition-colors duration-200 text-sm"
        >
          <FiFile className="w-4 h-4 mr-1" />
          Choose Files
        </label>
      </div>
    </div>
  );
};

export default DocumentUpload;