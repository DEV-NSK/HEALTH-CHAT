// // src/components/DocumentUpload/DocumentUpload.jsx
// import React, { useCallback, useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { useApp } from '../../contexts/AppContext';
// import { validateFile } from '../../utils/fileValidation';
// import { FiUpload, FiFile, FiX } from 'react-icons/fi';

// const DocumentUpload = () => {
//   const { uploadDocument, uploadProgress, isLoading } = useApp();
//   const [dragActive, setDragActive] = useState(false);

//   const onDrop = useCallback(async (acceptedFiles, rejectedFiles) => {
//     if (rejectedFiles.length > 0) {
//       alert('Some files were rejected. Please check file types and sizes.');
//       return;
//     }

//     for (const file of acceptedFiles) {
//       try {
//         await uploadDocument(file);
//       } catch (error) {
//         console.error('Upload failed:', error);
//       }
//     }
//   }, [uploadDocument]);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     validator: validateFile,
//     maxSize: 10 * 1024 * 1024, // 10MB
//     multiple: true
//   });

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Documents</h2>
      
//       <div
//         {...getRootProps()}
//         className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 ${
//           isDragActive 
//             ? 'border-healthcare-primary bg-blue-50' 
//             : 'border-gray-300 hover:border-healthcare-primary hover:bg-gray-50'
//         }`}
//       >
//         <input {...getInputProps()} />
        
//         <FiUpload className="mx-auto text-3xl text-gray-400 mb-3" />
        
//         <p className="text-gray-600 mb-2">
//           {isDragActive ? 'Drop your files here' : 'Drag & drop files here'}
//         </p>
        
//         <p className="text-sm text-gray-500 mb-3">
//           or click to select files
//         </p>
        
//         <div className="text-xs text-gray-400">
//           Supported formats: PDF, DOCX, TXT (Max 10MB each)
//         </div>
//       </div>

//       {isLoading && (
//         <div className="mt-4">
//           <div className="flex items-center justify-between text-sm text-gray-600">
//             <span>Uploading...</span>
//             <span>{Math.round(uploadProgress)}%</span>
//           </div>
//           <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
//             <div 
//               className="bg-healthcare-primary h-2 rounded-full transition-all duration-300"
//               style={{ width: `${uploadProgress}%` }}
//             ></div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentUpload;








import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useApp } from '/src/contexts/AppContext';
import { FiUpload } from 'react-icons/fi';

const DocumentUpload = () => {
  const { uploadDocument, isLoading } = useApp();

  const onDrop = useCallback(async (acceptedFiles) => {
    for (const file of acceptedFiles) {
      try {
        await uploadDocument(file);
      } catch (error) {
        console.error('Upload failed:', error);
      }
    }
  }, [uploadDocument]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt']
    },
    maxSize: 10 * 1024 * 1024, // 10MB
    multiple: true
  });

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Documents</h2>
      
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all duration-200 ${
          isDragActive 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-blue-500 hover:bg-gray-50'
        }`}
      >
        <input {...getInputProps()} />
        
        <FiUpload className="mx-auto text-3xl text-gray-400 mb-3" />
        
        <p className="text-gray-600 mb-2">
          {isDragActive ? 'Drop your files here' : 'Drag & drop files here'}
        </p>
        
        <p className="text-sm text-gray-500 mb-3">
          or click to select files
        </p>
        
        <div className="text-xs text-gray-400">
          Supported formats: PDF, DOCX, TXT (Max 10MB each)
        </div>
      </div>

      {isLoading && (
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>Uploading...</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className="bg-blue-500 h-2 rounded-full animate-pulse"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;