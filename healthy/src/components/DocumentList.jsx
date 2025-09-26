

// // src/components/DocumentList/DocumentList.jsx
// import React from 'react';
// import { useApp } from '/src/contexts/AppContext';
// import { FiFile, FiTrash2, FiCheck, FiClock, FiAlertCircle } from 'react-icons/fi';

// const DocumentList = () => {
//   const { documents, deleteDocument } = useApp();

//   const getStatusIcon = (status) => {
//     switch (status) {
//       case 'processed':
//         return <FiCheck className="w-3 h-3 text-green-500" />;
//       case 'processing':
//         return <FiClock className="w-3 h-3 text-yellow-500" />;
//       case 'error':
//         return <FiAlertCircle className="w-3 h-3 text-red-500" />;
//       default:
//         return <FiClock className="w-3 h-3 text-gray-500" />;
//     }
//   };

//   const formatFileSize = (bytes) => {
//     if (bytes === 0) return '0 Bytes';
//     const k = 1024;
//     const sizes = ['Bytes', 'KB', 'MB', 'GB'];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 h-full flex flex-col">
//       <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
//         Documents ({documents.length})
//       </h2>
      
//       {documents.length === 0 ? (
//         <div className="flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400">
//           <div className="text-center">
//             <FiFile className="w-8 h-8 mx-auto mb-2 opacity-50" />
//             <p className="text-sm">No documents uploaded</p>
//           </div>
//         </div>
//       ) : (
//         <div className="flex-1 overflow-y-auto space-y-2">
//           {documents.map((document) => (
//             <div
//               key={document.id}
//               className="flex items-center justify-between p-2 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
//             >
//               <div className="flex items-center space-x-2 flex-1 min-w-0">
//                 <FiFile className="w-4 h-4 text-gray-400 flex-shrink-0" />
//                 <div className="flex-1 min-w-0">
//                   <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
//                     {document.name}
//                   </p>
//                   <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
//                     <span>{formatFileSize(document.size)}</span>
//                     <span>•</span>
//                     <span>{formatDate(document.uploadDate)}</span>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="flex items-center space-x-2">
//                 <div className="flex items-center space-x-1 text-xs">
//                   {getStatusIcon(document.status)}
//                   <span className="capitalize hidden sm:inline">{document.status}</span>
//                 </div>
//                 <button
//                   onClick={() => deleteDocument(document.id)}
//                   className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors duration-200"
//                   title="Delete document"
//                 >
//                   <FiTrash2 className="w-3 h-3" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentList;




















// src/components/DocumentList/DocumentList.jsx
import React from 'react';
import { useApp } from '/src/contexts/AppContext';
import { FiFile, FiTrash2, FiCheck, FiClock, FiAlertCircle } from 'react-icons/fi';

const DocumentList = () => {
  const { documents, deleteDocument } = useApp();

  const getStatusIcon = (status) => {
    switch (status) {
      case 'processed':
        return <FiCheck className="w-3 h-3 text-green-500" />;
      case 'processing':
        return <FiClock className="w-3 h-3 text-yellow-500" />;
      case 'error':
        return <FiAlertCircle className="w-3 h-3 text-red-500" />;
      default:
        return <FiClock className="w-3 h-3 text-gray-500" />;
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full flex flex-col">
      <h2 className="text-lg font-semibold p-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">
        Documents ({documents.length})
      </h2>
      
      {documents.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 p-4">
          <FiFile className="w-16 h-16 mx-auto mb-4 opacity-30" />
          <p className="text-lg font-medium mb-2">No documents uploaded</p>
          <p className="text-sm text-center">Upload PDF, DOCX, or TXT files to start chatting about your healthcare documents</p>
        </div>
      ) : (
        <div className="flex-1 min-h-0 overflow-y-auto">
          <div className="p-2 space-y-2">
            {documents.map((document) => (
              <div
                key={document.id}
                className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <FiFile className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {document.name}
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                      <span>{formatFileSize(document.size)}</span>
                      <span>•</span>
                      <span>{formatDate(document.uploadDate)}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1 text-xs">
                    {getStatusIcon(document.status)}
                    <span className="capitalize hidden sm:inline">{document.status}</span>
                  </div>
                  <button
                    onClick={() => deleteDocument(document.id)}
                    className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors duration-200"
                    title="Delete document"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentList;