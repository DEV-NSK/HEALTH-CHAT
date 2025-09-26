// // src/components/DocumentList/DocumentList.jsx
// import React from 'react';
// import { useApp } from '../../contexts/AppContext';
// import { FiFile, FiTrash2, FiEye, FiDownload } from 'react-icons/fi';

// const DocumentList = ({ documents }) => {
//   const { deleteDocument, setActiveDocument } = useApp();

//   const formatFileSize = (bytes) => {
//     if (bytes === 0) return '0 Bytes';
//     const k = 1024;
//     const sizes = ['Bytes', 'KB', 'MB', 'GB'];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   const getFileIcon = (type) => {
//     if (type.includes('pdf')) return '📄';
//     if (type.includes('word') || type.includes('document')) return '📝';
//     return '📋';
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//       <div className="p-4 border-b border-gray-200">
//         <h2 className="text-xl font-semibold text-gray-800">Uploaded Documents</h2>
//         <p className="text-sm text-gray-600">{documents.length} documents</p>
//       </div>

//       <div className="max-h-96 overflow-y-auto">
//         {documents.length === 0 ? (
//           <div className="p-8 text-center text-gray-500">
//             <FiFile className="mx-auto text-3xl mb-2" />
//             <p>No documents uploaded yet</p>
//           </div>
//         ) : (
//           <div className="divide-y divide-gray-100">
//             {documents.map((document) => (
//               <div key={document.id} className="p-4 hover:bg-gray-50 transition-colors">
//                 <div className="flex items-start justify-between">
//                   <div className="flex items-start space-x-3 flex-1 min-w-0">
//                     <span className="text-2xl mt-1">{getFileIcon(document.type)}</span>

//                     <div className="flex-1 min-w-0">
//                       <h3 className="font-medium text-gray-900 truncate">
//                         {document.name}
//                       </h3>

//                       <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
//                         <span>{formatFileSize(document.size)}</span>
//                         <span>•</span>
//                         <span>{document.type.split('/')[1]?.toUpperCase()}</span>
//                         <span>•</span>
//                         <span>{formatDate(document.uploadDate)}</span>
//                       </div>

//                       {document.status && (
//                         <span className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${
//                           document.status === 'processed'
//                             ? 'bg-green-100 text-green-800'
//                             : 'bg-yellow-100 text-yellow-800'
//                         }`}>
//                           {document.status}
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-2 ml-4">
//                     <button
//                       onClick={() => setActiveDocument(document)}
//                       className="p-2 text-gray-400 hover:text-healthcare-primary transition-colors"
//                       title="Preview"
//                     >
//                       <FiEye size={16} />
//                     </button>

//                     <button
//                       onClick={() => deleteDocument(document.id)}
//                       className="p-2 text-gray-400 hover:text-red-600 transition-colors"
//                       title="Delete"
//                     >
//                       <FiTrash2 size={16} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DocumentList;

import React from "react";
import { useApp } from "/src/contexts/AppContext";
import { FiFile, FiTrash2, FiEye } from "react-icons/fi";

const DocumentList = () => {
  const { documents, deleteDocument, setActiveDocument } = useApp();

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getFileIcon = (type) => {
    if (type.includes("pdf")) return "📄";
    if (type.includes("word") || type.includes("document")) return "📝";
    return "📋";
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-6">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          Uploaded Documents
        </h2>
        <p className="text-sm text-gray-600">{documents.length} documents</p>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {documents.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <FiFile className="mx-auto text-3xl mb-2" />
            <p>No documents uploaded yet</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {documents.map((document) => (
              <div
                key={document.id}
                className="p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1 min-w-0">
                    <span className="text-2xl mt-1">
                      {getFileIcon(document.type)}
                    </span>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">
                        {document.name}
                      </h3>

                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span>{formatFileSize(document.size)}</span>
                        <span>•</span>
                        <span>
                          {document.type.split("/")[1]?.toUpperCase()}
                        </span>
                        <span>•</span>
                        <span>{formatDate(document.uploadDate)}</span>
                      </div>

                      {document.status && (
                        <span
                          className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${
                            document.status === "processed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {document.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => setActiveDocument(document)}
                      className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
                      title="Preview"
                    >
                      <FiEye size={16} />
                    </button>

                    <button
                      onClick={() => deleteDocument(document.id)}
                      className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      title="Delete"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentList;
