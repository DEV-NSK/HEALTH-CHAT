// // // src/components/DocumentList/DocumentList.jsx
// // import React from 'react';
// // import { useApp } from '/src/contexts/AppContext';
// // import { FiFile, FiTrash2, FiCheck, FiClock, FiAlertCircle } from 'react-icons/fi';

// // const DocumentList = () => {
// //   const { documents, deleteDocument } = useApp();

// //   const getStatusIcon = (status) => {
// //     switch (status) {
// //       case 'processed':
// //         return <FiCheck className="w-3 h-3 text-green-500" />;
// //       case 'processing':
// //         return <FiClock className="w-3 h-3 text-yellow-500" />;
// //       case 'error':
// //         return <FiAlertCircle className="w-3 h-3 text-red-500" />;
// //       default:
// //         return <FiClock className="w-3 h-3 text-gray-500" />;
// //     }
// //   };

// //   const formatFileSize = (bytes) => {
// //     if (bytes === 0) return '0 Bytes';
// //     const k = 1024;
// //     const sizes = ['Bytes', 'KB', 'MB', 'GB'];
// //     const i = Math.floor(Math.log(bytes) / Math.log(k));
// //     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
// //   };

// //   const formatDate = (dateString) => {
// //     return new Date(dateString).toLocaleDateString('en-US', {
// //       month: 'short',
// //       day: 'numeric',
// //       hour: '2-digit',
// //       minute: '2-digit'
// //     });
// //   };

// //   return (
// //     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 h-full flex flex-col">
// //       <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
// //         Documents ({documents.length})
// //       </h2>

// //       {documents.length === 0 ? (
// //         <div className="flex-1 flex items-center justify-center text-gray-500 dark:text-gray-400">
// //           <div className="text-center">
// //             <FiFile className="w-8 h-8 mx-auto mb-2 opacity-50" />
// //             <p className="text-sm">No documents uploaded</p>
// //           </div>
// //         </div>
// //       ) : (
// //         <div className="flex-1 overflow-y-auto space-y-2">
// //           {documents.map((document) => (
// //             <div
// //               key={document.id}
// //               className="flex items-center justify-between p-2 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
// //             >
// //               <div className="flex items-center space-x-2 flex-1 min-w-0">
// //                 <FiFile className="w-4 h-4 text-gray-400 flex-shrink-0" />
// //                 <div className="flex-1 min-w-0">
// //                   <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
// //                     {document.name}
// //                   </p>
// //                   <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
// //                     <span>{formatFileSize(document.size)}</span>
// //                     <span>•</span>
// //                     <span>{formatDate(document.uploadDate)}</span>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="flex items-center space-x-2">
// //                 <div className="flex items-center space-x-1 text-xs">
// //                   {getStatusIcon(document.status)}
// //                   <span className="capitalize hidden sm:inline">{document.status}</span>
// //                 </div>
// //                 <button
// //                   onClick={() => deleteDocument(document.id)}
// //                   className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors duration-200"
// //                   title="Delete document"
// //                 >
// //                   <FiTrash2 className="w-3 h-3" />
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default DocumentList;











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
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full flex flex-col">
//       <h2 className="text-lg font-semibold p-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">
//         Documents ({documents.length})
//       </h2>

//       {documents.length === 0 ? (
//         <div className="flex-1 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 p-4">
//           <FiFile className="w-16 h-16 mx-auto mb-4 opacity-30" />
//           <p className="text-lg font-medium mb-2">No documents uploaded</p>
//           <p className="text-sm text-center">Upload PDF, DOCX, or TXT files to start chatting about your healthcare documents</p>
//         </div>
//       ) : (
//         <div className="flex-1 min-h-0 overflow-y-auto">
//           <div className="p-2 space-y-2">
//             {documents.map((document) => (
//               <div
//                 key={document.id}
//                 className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
//               >
//                 <div className="flex items-center space-x-3 flex-1 min-w-0">
//                   <FiFile className="w-4 h-4 text-gray-400 flex-shrink-0" />
//                   <div className="flex-1 min-w-0">
//                     <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
//                       {document.name}
//                     </p>
//                     <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
//                       <span>{formatFileSize(document.size)}</span>
//                       <span>•</span>
//                       <span>{formatDate(document.uploadDate)}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center space-x-2">
//                   <div className="flex items-center space-x-1 text-xs">
//                     {getStatusIcon(document.status)}
//                     <span className="capitalize hidden sm:inline">{document.status}</span>
//                   </div>
//                   <button
//                     onClick={() => deleteDocument(document.id)}
//                     className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors duration-200"
//                     title="Delete document"
//                   >
//                     <FiTrash2 className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentList;











// // // src/components/DocumentList/DocumentList.jsx
// // import React, { useState } from "react";
// // import { Document, Page, pdfjs } from "react-pdf";
// // import pdfWorker from 'pdfjs-dist/build/pdf.worker.entry';
// // import { useApp } from "/src/contexts/AppContext";
// // import {
// //   FiFile,
// //   FiTrash2,
// //   FiCheck,
// //   FiClock,
// //   FiAlertCircle,
// //   FiEye,
// //   FiX,
// //   FiChevronLeft,
// //   FiChevronRight,
// //   FiZoomIn,
// //   FiZoomOut,
// //   FiRotateCw,
// //   FiDownload,
// //   FiMaximize, // Using FiMaximize instead of FiFullscreen
// //   FiType,
// // } from "react-icons/fi";

// // // Configure PDF.js worker
// // pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker

// // const DocumentList = () => {
// //   const { documents, deleteDocument } = useApp();
// //   const [previewDocument, setPreviewDocument] = useState(null);
// //   const [numPages, setNumPages] = useState(null);
// //   const [pageNumber, setPageNumber] = useState(1);
// //   const [scale, setScale] = useState(1.0);
// //   const [rotation, setRotation] = useState(0);
// //   const [fullscreen, setFullscreen] = useState(false);

// //   const getStatusIcon = (status) => {
// //     switch (status) {
// //       case "processed":
// //         return <FiCheck className="w-3 h-3 text-green-500" />;
// //       case "processing":
// //         return <FiClock className="w-3 h-3 text-yellow-500" />;
// //       case "error":
// //         return <FiAlertCircle className="w-3 h-3 text-red-500" />;
// //       default:
// //         return <FiClock className="w-3 h-3 text-gray-500" />;
// //     }
// //   };

// //   const formatFileSize = (bytes) => {
// //     if (bytes === 0) return "0 Bytes";
// //     const k = 1024;
// //     const sizes = ["Bytes", "KB", "MB", "GB"];
// //     const i = Math.floor(Math.log(bytes) / Math.log(k));
// //     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
// //   };

// //   const formatDate = (dateString) => {
// //     return new Date(dateString).toLocaleDateString("en-US", {
// //       month: "short",
// //       day: "numeric",
// //       hour: "2-digit",
// //       minute: "2-digit",
// //     });
// //   };

// //   // Generate sample content based on file type
// //   const generateSampleContent = (document) => {
// //     const fileName = document.name.toLowerCase();
// //     const fileType = fileName.split(".").pop()?.toUpperCase() || "DOCUMENT";

// //     if (fileName.endsWith(".pdf")) {
// //       return {
// //         type: "pdf",
// //         content: `PDF Preview: ${
// //           document.name
// //         }\n\nThis is a sample PDF viewer interface. In a real application, the actual PDF content would be displayed here with proper rendering.\n\nDocument Information:\n- File: ${
// //           document.name
// //         }\n- Type: ${fileType}\n- Size: ${formatFileSize(
// //           document.size
// //         )}\n- Uploaded: ${formatDate(
// //           document.uploadDate
// //         )}\n\nUse the toolbar above to navigate pages, zoom, and rotate the document.`,
// //       };
// //     } else if (fileName.endsWith(".docx")) {
// //       return {
// //         type: "docx",
// //         content: `WORD DOCUMENT VIEWER\n\n${
// //           document.name
// //         }\n\nThis is a sample Word document viewer. In a production environment, the actual document content would be extracted and displayed here.\n\nDOCUMENT PROPERTIES:\n• File Name: ${
// //           document.name
// //         }\n• File Type: ${fileType}\n• File Size: ${formatFileSize(
// //           document.size
// //         )}\n• Upload Date: ${formatDate(
// //           document.uploadDate
// //         )}\n\nCONTENT AREA:\nThe actual text, images, and formatting from the Word document would appear in this area. The viewer would support:\n\n- Text formatting (bold, italic, underline)\n- Headings and paragraphs\n- Lists and tables\n- Images and charts\n- Page layout and styling\n\nThis is a demonstration of the document viewing capability.`,
// //       };
// //     } else if (fileName.endsWith(".txt")) {
// //       return {
// //         type: "txt",
// //         content: `TEXT FILE VIEWER\n\nFILE: ${
// //           document.name
// //         }\nSIZE: ${formatFileSize(
// //           document.size
// //         )}\nTYPE: ${fileType}\nUPLOADED: ${formatDate(
// //           document.uploadDate
// //         )}\n\nCONTENT:\n\nThis is a sample text file viewer. The actual content of the text file would be displayed here in a real application.\n\nFor demonstration purposes, this shows how the text content would appear with proper formatting and line breaks.\n\nThe text viewer supports:\n- Plain text rendering\n- Line break preservation\n- Scrollable content area\n- Search functionality\n- Text selection\n\nIn a healthcare context, this could display:\n- Patient notes\n- Medical reports\n- Lab results\n- Treatment plans\n- Clinical documentation\n\nThis interface provides a clean, readable view of text-based medical documents.`,
// //       };
// //     } else {
// //       return {
// //         type: "unknown",
// //         content: `DOCUMENT VIEWER\n\nFile: ${
// //           document.name
// //         }\nType: ${fileType}\nSize: ${formatFileSize(
// //           document.size
// //         )}\nUploaded: ${formatDate(
// //           document.uploadDate
// //         )}\n\nThis file type cannot be previewed in the current viewer. Please download the file to view its contents.`,
// //       };
// //     }
// //   };

// //   const openPreview = (document) => {
// //     setPreviewDocument(document);
// //     setPageNumber(1);
// //     setScale(1.0);
// //     setRotation(0);
// //   };

// //   const closePreview = () => {
// //     setPreviewDocument(null);
// //     setNumPages(null);
// //     setFullscreen(false);
// //   };

// //   const onDocumentLoadSuccess = ({ numPages }) => {
// //     setNumPages(numPages);
// //   };

// //   const goToPreviousPage = () => {
// //     setPageNumber((prev) => Math.max(prev - 1, 1));
// //   };

// //   const goToNextPage = () => {
// //     setPageNumber((prev) => Math.min(prev + 1, numPages || 1));
// //   };

// //   const zoomIn = () => {
// //     setScale((prev) => Math.min(prev + 0.25, 3.0));
// //   };

// //   const zoomOut = () => {
// //     setScale((prev) => Math.max(prev - 0.25, 0.5));
// //   };

// //   const rotate = () => {
// //     setRotation((prev) => (prev + 90) % 360);
// //   };

// //   const toggleFullscreen = () => {
// //     setFullscreen(!fullscreen);
// //   };

// //   const downloadDocument = () => {
// //     if (previewDocument) {
// //       const sampleContent = generateSampleContent(previewDocument);
// //       const blob = new Blob([sampleContent.content], { type: "text/plain" });
// //       const url = URL.createObjectURL(blob);
// //       const link = document.createElement("a");
// //       link.href = url;
// //       link.download = previewDocument.name;
// //       link.click();
// //       URL.revokeObjectURL(url);
// //     }
// //   };

// //   const isPdf = (document) => {
// //     return document?.name.toLowerCase().endsWith(".pdf");
// //   };

// //   const isWordDoc = (document) => {
// //     return document?.name.toLowerCase().endsWith(".docx");
// //   };

// //   const isTextFile = (document) => {
// //     return document?.name.toLowerCase().endsWith(".txt");
// //   };

// //   const getFileIcon = (document) => {
// //     if (isPdf(document)) return "📄";
// //     if (isWordDoc(document)) return "📝";
// //     if (isTextFile(document)) return "📋";
// //     return "📎";
// //   };

// //   // If preview is open, show the document viewer
// //   if (previewDocument) {
// //     const sampleContent = generateSampleContent(previewDocument);

// //     return (
// //       <div
// //         className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full flex flex-col min-h-0 ${
// //           fullscreen ? "fixed inset-0 z-50 rounded-none" : ""
// //         }`}
// //       >
// //         {/* Viewer Header */}
// //         <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
// //           <div className="flex items-center space-x-3">
// //             <span className="text-2xl">{getFileIcon(previewDocument)}</span>
// //             <div>
// //               <h2 className="text-lg font-semibold text-gray-900 dark:text-white truncate max-w-md">
// //                 {previewDocument.name}
// //               </h2>
// //               <div className="text-sm text-gray-500 dark:text-gray-400">
// //                 {formatFileSize(previewDocument.size)} • {previewDocument.type}{" "}
// //                 •{" "}
// //                 {isPdf(previewDocument)
// //                   ? `Page ${pageNumber} of ${numPages || "--"}`
// //                   : "Document Viewer"}
// //               </div>
// //             </div>
// //           </div>

// //           <div className="flex items-center space-x-2">
// //             <button
// //               onClick={downloadDocument}
// //               className="p-2 text-gray-600 dark:text-gray-400 hover:text-healthcare-primary transition-colors"
// //               title="Download"
// //             >
// //               <FiDownload className="w-5 h-5" />
// //             </button>

// //             <button
// //               onClick={toggleFullscreen}
// //               className="p-2 text-gray-600 dark:text-gray-400 hover:text-healthcare-primary transition-colors"
// //               title="Fullscreen"
// //             >
// //               <FiMaximize className="w-5 h-5" />
// //             </button>

// //             <button
// //               onClick={closePreview}
// //               className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors"
// //               title="Close viewer"
// //             >
// //               <FiX className="w-5 h-5" />
// //             </button>
// //           </div>
// //         </div>

// //         {/* Viewer Toolbar */}
// //         <div className="flex-shrink-0 flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700">
// //           <div className="flex items-center space-x-4">
// //             {/* Navigation Controls */}
// //             {isPdf(previewDocument) && (
// //               <div className="flex items-center space-x-2">
// //                 <button
// //                   onClick={goToPreviousPage}
// //                   disabled={pageNumber <= 1}
// //                   className="p-2 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white dark:hover:bg-gray-600"
// //                 >
// //                   <FiChevronLeft className="w-4 h-4" />
// //                 </button>

// //                 <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[60px] text-center">
// //                   {pageNumber} / {numPages || "--"}
// //                 </span>

// //                 <button
// //                   onClick={goToNextPage}
// //                   disabled={pageNumber >= (numPages || 1)}
// //                   className="p-2 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white dark:hover:bg-gray-600"
// //                 >
// //                   <FiChevronRight className="w-4 h-4" />
// //                 </button>
// //               </div>
// //             )}

// //             {/* Zoom Controls */}
// //             <div className="flex items-center space-x-2">
// //               <button
// //                 onClick={zoomOut}
// //                 disabled={scale <= 0.5}
// //                 className="p-2 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white dark:hover:bg-gray-600"
// //               >
// //                 <FiZoomOut className="w-4 h-4" />
// //               </button>

// //               <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[50px] text-center">
// //                 {Math.round(scale * 100)}%
// //               </span>

// //               <button
// //                 onClick={zoomIn}
// //                 disabled={scale >= 3.0}
// //                 className="p-2 rounded border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white dark:hover:bg-gray-600"
// //               >
// //                 <FiZoomIn className="w-4 h-4" />
// //               </button>
// //             </div>

// //             {/* Rotation */}
// //             <button
// //               onClick={rotate}
// //               className="p-2 rounded border border-gray-300 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-600"
// //             >
// //               <FiRotateCw className="w-4 h-4" />
// //             </button>
// //           </div>

// //           <div className="text-sm text-gray-600 dark:text-gray-400">
// //             {sampleContent.type.toUpperCase()} Viewer
// //           </div>
// //         </div>

// //         {/* Document Viewer Content */}
// //         <div className="flex-1 min-h-0 overflow-auto bg-gray-100 dark:bg-gray-900 p-4">
// //           {isPdf(previewDocument) ? (
// //             // PDF Viewer
// //             <div className="flex justify-center">
// //               <Document
// //                 file={{
// //                   url: URL.createObjectURL(
// //                     new Blob([sampleContent.content], {
// //                       type: "application/pdf",
// //                     })
// //                   ),
// //                 }}
// //                 onLoadSuccess={onDocumentLoadSuccess}
// //                 loading={
// //                   <div className="flex flex-col items-center justify-center h-64">
// //                     <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-healthcare-primary"></div>
// //                     <p className="mt-3 text-gray-600 dark:text-gray-400">
// //                       Loading PDF document...
// //                     </p>
// //                   </div>
// //                 }
// //                 error={
// //                   <div className="flex flex-col items-center justify-center h-64 text-red-500">
// //                     <FiAlertCircle className="w-12 h-12 mb-2" />
// //                     <p>Failed to load PDF document</p>
// //                   </div>
// //                 }
// //               >
// //                 <Page
// //                   pageNumber={pageNumber}
// //                   scale={scale}
// //                   rotate={rotation}
// //                   className="shadow-lg border border-gray-300 rounded bg-white"
// //                   loading={
// //                     <div className="flex items-center justify-center h-64">
// //                       <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-healthcare-primary"></div>
// //                     </div>
// //                   }
// //                 />
// //               </Document>
// //             </div>
// //           ) : (
// //             // Text-based Document Viewer
// //             <div className="max-w-4xl mx-auto">
// //               <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 min-h-[500px]">
// //                 <div className="flex items-center space-x-3 mb-4">
// //                   <FiType className="w-6 h-6 text-healthcare-primary" />
// //                   <h3 className="text-lg font-semibold">
// //                     {sampleContent.type.toUpperCase()} Document Viewer
// //                   </h3>
// //                 </div>

// //                 <div className="prose dark:prose-invert max-w-none">
// //                   <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-6 min-h-[400px]">
// //                     <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
// //                       {sampleContent.content}
// //                     </pre>
// //                   </div>
// //                 </div>

// //                 <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
// //                   <p className="text-sm text-blue-700 dark:text-blue-300">
// //                     <strong>Document Viewer Features:</strong> Zoom, rotation,
// //                     fullscreen mode, and download functionality. In a production
// //                     environment, this would display the actual document content.
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </div>

// //         {/* Viewer Footer */}
// //         <div className="flex-shrink-0 flex items-center justify-between p-3 border-t border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-xs text-gray-500 dark:text-gray-400">
// //           <span>Healthcare Document Viewer • Ready</span>
// //           <span>
// //             Scale: {Math.round(scale * 100)}% • Rotation: {rotation}°
// //           </span>
// //         </div>
// //       </div>
// //     );
// //   }

// //   // Normal document list view
// //   return (
// //     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full flex flex-col min-h-0">
// //       {/* Header */}
// //       <div className="flex-shrink-0">
// //         <h2 className="text-lg font-semibold p-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">
// //           Documents ({documents.length})
// //         </h2>
// //       </div>

// //       {/* Content Area */}
// //       <div className="flex-1 overflow-hidden flex flex-col min-h-0">
// //         <div className="flex-1 min-h-0 overflow-y-auto">
// //           {documents.length === 0 ? (
// //             <div className="h-full flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 p-4">
// //               <FiFile className="w-16 h-16 mb-4 opacity-30" />
// //               <p className="text-lg font-medium mb-2 text-center">
// //                 No documents uploaded
// //               </p>
// //               <p className="text-sm text-center">
// //                 Upload documents to view them in the document viewer
// //               </p>
// //             </div>
// //           ) : (
// //             <div className="p-4 space-y-3">
// //               {documents.map((document) => (
// //                 <div
// //                   key={document.id}
// //                   className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
// //                 >
// //                   <div className="flex items-center space-x-3 flex-1 min-w-0">
// //                     <span className="text-2xl">{getFileIcon(document)}</span>
// //                     <div className="flex-1 min-w-0">
// //                       <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
// //                         {document.name}
// //                       </p>
// //                       <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
// //                         <span>{formatFileSize(document.size)}</span>
// //                         <span>•</span>
// //                         <span>{formatDate(document.uploadDate)}</span>
// //                         <span>•</span>
// //                         <span
// //                           className={`px-2 py-1 rounded-full text-xs ${
// //                             isPdf(document)
// //                               ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
// //                               : isWordDoc(document)
// //                               ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
// //                               : "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
// //                           }`}
// //                         >
// //                           {document.name.split(".").pop()?.toUpperCase()}
// //                         </span>
// //                       </div>

// //                       {document.status === "processing" && (
// //                         <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
// //                           <div
// //                             className="bg-healthcare-primary h-1.5 rounded-full animate-pulse"
// //                             style={{ width: "100%" }}
// //                           />
// //                         </div>
// //                       )}
// //                     </div>
// //                   </div>

// //                   <div className="flex items-center space-x-2">
// //                     <div className="flex items-center space-x-1 text-xs">
// //                       {getStatusIcon(document.status)}
// //                       <span className="capitalize">{document.status}</span>
// //                     </div>

// //                     {document.status === "processed" && (
// //                       <button
// //                         onClick={() => openPreview(document)}
// //                         className="p-2 text-healthcare-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors duration-200"
// //                         title="Open in document viewer"
// //                       >
// //                         <FiEye className="w-4 h-4" />
// //                       </button>
// //                     )}

// //                     <button
// //                       onClick={() => deleteDocument(document.id)}
// //                       className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors duration-200"
// //                       title="Delete document"
// //                     >
// //                       <FiTrash2 className="w-4 h-4" />
// //                     </button>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DocumentList;










































// src/components/DocumentList/DocumentList.jsx
import React, { useState } from 'react';
import { useApp } from '/src/contexts/AppContext';
import { FiFile, FiTrash2, FiCheck, FiClock, FiAlertCircle, FiEye, FiX } from 'react-icons/fi';

const DocumentList = () => {
  const { documents, deleteDocument } = useApp();
  const [previewDocument, setPreviewDocument] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

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

  const handlePreview = (document) => {
    setPreviewDocument(document);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    setPreviewDocument(null);
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'pdf':
        return '📄';
      case 'docx':
      case 'doc':
        return '📝';
      case 'txt':
        return '📃';
      default:
        return '📎';
    }
  };

  const renderPreviewContent = () => {
    if (!previewDocument) return null;

    // For now, we'll show a simple preview with document info
    // In a real application, you might want to:
    // - Use a PDF viewer for PDF files
    // - Convert DOCX to HTML for preview
    // - Show plain text for TXT files
    return (
      <div className="p-6">
        <div className="text-center mb-6">
          <div className="text-4xl mb-2">{getFileIcon(previewDocument.name)}</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {previewDocument.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {formatFileSize(previewDocument.size)} • {formatDate(previewDocument.uploadDate)}
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-gray-600 dark:text-gray-300">Status:</span>
              <span className="ml-2 capitalize text-gray-900 dark:text-white">
                {previewDocument.status}
              </span>
            </div>
            <div>
              <span className="font-medium text-gray-600 dark:text-gray-300">Type:</span>
              <span className="ml-2 text-gray-900 dark:text-white uppercase">
                {previewDocument.name.split('.').pop()}
              </span>
            </div>
            <div className="col-span-2">
              <span className="font-medium text-gray-600 dark:text-gray-300">Uploaded:</span>
              <span className="ml-2 text-gray-900 dark:text-white">
                {formatDate(previewDocument.uploadDate)}
              </span>
            </div>
          </div>
        </div>

        {/* Placeholder for actual document content */}
        <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-600 rounded-lg">
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
            {previewDocument.status === 'processed' 
              ? 'Document content would be displayed here. In a real application, this would show the actual document content based on file type.'
              : 'Document is still processing. Preview will be available once processing is complete.'}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
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
                      onClick={() => handlePreview(document)}
                      className="p-1 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors duration-200"
                      title="Preview document"
                    >
                      <FiEye className="w-4 h-4" />
                    </button>
                    
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

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Document Preview
              </h3>
              <button
                onClick={closePreview}
                className="p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 rounded transition-colors duration-200"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
            
            <div className="max-h-[calc(90vh-8rem)] overflow-y-auto">
              {renderPreviewContent()}
            </div>
            
            <div className="flex justify-end p-4 border-t border-gray-200 dark:border-gray-600">
              <button
                onClick={closePreview}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DocumentList;