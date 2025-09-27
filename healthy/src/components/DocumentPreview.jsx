// // src/components/DocumentPreview/DocumentPreview.jsx
// import React, { useState, useCallback } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import { useApp } from '/src/contexts/AppContext';
// import { 
//   FiX, 
//   FiChevronLeft, 
//   FiChevronRight, 
//   FiZoomIn, 
//   FiZoomOut, 
//   FiDownload,
//   FiSearch,
//   FiFileText,
//   FiRotateCw
// } from 'react-icons/fi';

// // Configure PDF.js worker
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// const DocumentPreview = () => {
//   const { documents } = useApp();
//   const [selectedDocument, setSelectedDocument] = useState(null);
//   const [isPreviewOpen, setIsPreviewOpen] = useState(false);
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [scale, setScale] = useState(1.0);
//   const [rotation, setRotation] = useState(0);
//   const [searchText, setSearchText] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [currentSearchIndex, setCurrentSearchIndex] = useState(0);

//   // Open document preview
//   const openPreview = (document) => {
//     if (document.type === 'application/pdf' || document.name.endsWith('.pdf')) {
//       setSelectedDocument(document);
//       setIsPreviewOpen(true);
//       setPageNumber(1);
//       setScale(1.0);
//       setRotation(0);
//       setSearchText('');
//       setSearchResults([]);
//     } else {
//       // For non-PDF documents, show a text preview or download option
//       alert(`Preview for ${document.name} is not available. Please download the file to view it.`);
//     }
//   };

//   // Close preview
//   const closePreview = () => {
//     setIsPreviewOpen(false);
//     setSelectedDocument(null);
//     setPageNumber(1);
//     setNumPages(null);
//   };

//   // Document load success handler
//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   // Navigation functions
//   const goToPreviousPage = () => {
//     setPageNumber(prevPageNumber => Math.max(prevPageNumber - 1, 1));
//   };

//   const goToNextPage = () => {
//     setPageNumber(prevPageNumber => Math.min(prevPageNumber + 1, numPages || 1));
//   };

//   // Zoom functions
//   const zoomIn = () => {
//     setScale(prevScale => Math.min(prevScale + 0.25, 3.0));
//   };

//   const zoomOut = () => {
//     setScale(prevScale => Math.max(prevScale - 0.25, 0.5));
//   };

//   // Rotation function
//   const rotate = () => {
//     setRotation(prevRotation => (prevRotation + 90) % 360);
//   };

//   // Search in PDF (basic implementation)
//   const handleSearch = useCallback(async () => {
//     if (!selectedDocument || !searchText.trim()) return;

//     try {
//       // This is a simplified search implementation
//       // In a real app, you'd use PDF.js text extraction API
//       const mockResults = [
//         { page: 1, text: 'Sample result 1' },
//         { page: 2, text: 'Sample result 2' },
//         { page: 3, text: 'Sample result 3' },
//       ].filter(result => result.text.toLowerCase().includes(searchText.toLowerCase()));

//       setSearchResults(mockResults);
//       setCurrentSearchIndex(0);
      
//       if (mockResults.length > 0) {
//         setPageNumber(mockResults[0].page);
//       }
//     } catch (error) {
//       console.error('Search error:', error);
//     }
//   }, [selectedDocument, searchText]);

//   // Download document
//   const downloadDocument = () => {
//     if (selectedDocument) {
//       // Create a mock download link
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(new Blob(['Mock file content'], { type: selectedDocument.type }));
//       link.download = selectedDocument.name;
//       link.click();
//       URL.revokeObjectURL(link.href);
//     }
//   };

//   // If no preview is open, show the document list
//   if (!isPreviewOpen) {
//     return (
//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
//         <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
//           Document Preview
//         </h2>
        
//         {documents.length === 0 ? (
//           <div className="text-center py-8 text-gray-500 dark:text-gray-400">
//             <FiFileText className="w-16 h-16 mx-auto mb-4 opacity-30" />
//             <p>No documents available for preview</p>
//             <p className="text-sm mt-2">Upload PDF documents to enable preview functionality</p>
//           </div>
//         ) : (
//           <div className="space-y-3">
//             <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
//               Click on a PDF document to preview it. Supported formats: PDF
//             </p>
            
//             {documents.map((document) => (
//               <div
//                 key={document.id}
//                 onClick={() => openPreview(document)}
//                 className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
//                   document.type === 'application/pdf' || document.name.endsWith('.pdf')
//                     ? 'border-gray-200 dark:border-gray-600 hover:border-healthcare-primary hover:bg-blue-50 dark:hover:bg-blue-900/20'
//                     : 'border-gray-100 dark:border-gray-700 opacity-50 cursor-not-allowed'
//                 }`}
//               >
//                 <div className="flex items-center space-x-3 flex-1">
//                   <FiFileText className={`w-5 h-5 ${
//                     document.type === 'application/pdf' || document.name.endsWith('.pdf')
//                       ? 'text-red-500'
//                       : 'text-gray-400'
//                   }`} />
//                   <div className="flex-1">
//                     <p className="text-sm font-medium text-gray-900 dark:text-white">
//                       {document.name}
//                     </p>
//                     <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
//                       <span>{document.type}</span>
//                       <span>•</span>
//                       <span>Uploaded: {new Date(document.uploadDate).toLocaleDateString()}</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 {document.type === 'application/pdf' || document.name.endsWith('.pdf') ? (
//                   <span className="text-healthcare-primary text-sm font-medium">Preview</span>
//                 ) : (
//                   <span className="text-gray-400 text-sm">Not supported</span>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }

//   // PDF Preview Modal
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-6xl h-full max-h-[90vh] flex flex-col">
//         {/* Header */}
//         <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
//           <div className="flex items-center space-x-3">
//             <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate max-w-md">
//               {selectedDocument?.name}
//             </h3>
//             <span className="text-sm text-gray-500 dark:text-gray-400">
//               Page {pageNumber} of {numPages || '--'}
//             </span>
//           </div>
          
//           <div className="flex items-center space-x-2">
//             <button
//               onClick={downloadDocument}
//               className="p-2 text-gray-600 dark:text-gray-400 hover:text-healthcare-primary transition-colors"
//               title="Download"
//             >
//               <FiDownload className="w-5 h-5" />
//             </button>
//             <button
//               onClick={closePreview}
//               className="p-2 text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors"
//               title="Close"
//             >
//               <FiX className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="flex-shrink-0 p-4 border-b border-gray-200 dark:border-gray-600">
//           <div className="flex space-x-2">
//             <div className="flex-1 relative">
//               <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//               <input
//                 type="text"
//                 placeholder="Search in document..."
//                 value={searchText}
//                 onChange={(e) => setSearchText(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-healthcare-primary"
//               />
//             </div>
//             <button
//               onClick={handleSearch}
//               className="px-4 py-2 bg-healthcare-primary text-white rounded-lg hover:bg-healthcare-secondary transition-colors"
//             >
//               Search
//             </button>
//           </div>
          
//           {/* Search Results */}
//           {searchResults.length > 0 && (
//             <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//               Found {searchResults.length} results. 
//               <button 
//                 onClick={() => setCurrentSearchIndex(prev => (prev + 1) % searchResults.length)}
//                 className="ml-2 text-healthcare-primary hover:underline"
//               >
//                 Next result
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Toolbar */}
//         <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600">
//           <div className="flex items-center space-x-4">
//             {/* Navigation */}
//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={goToPreviousPage}
//                 disabled={pageNumber <= 1}
//                 className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700"
//                 title="Previous page"
//               >
//                 <FiChevronLeft className="w-4 h-4" />
//               </button>
              
//               <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[80px] text-center">
//                 {pageNumber} / {numPages || '--'}
//               </span>
              
//               <button
//                 onClick={goToNextPage}
//                 disabled={pageNumber >= (numPages || 1)}
//                 className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700"
//                 title="Next page"
//               >
//                 <FiChevronRight className="w-4 h-4" />
//               </button>
//             </div>

//             {/* Zoom Controls */}
//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={zoomOut}
//                 disabled={scale <= 0.5}
//                 className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700"
//                 title="Zoom out"
//               >
//                 <FiZoomOut className="w-4 h-4" />
//               </button>
              
//               <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[60px] text-center">
//                 {Math.round(scale * 100)}%
//               </span>
              
//               <button
//                 onClick={zoomIn}
//                 disabled={scale >= 3.0}
//                 className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 dark:hover:bg-gray-700"
//                 title="Zoom in"
//               >
//                 <FiZoomIn className="w-4 h-4" />
//               </button>
//             </div>

//             {/* Rotation */}
//             <button
//               onClick={rotate}
//               className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
//               title="Rotate"
//             >
//               <FiRotateCw className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         {/* PDF Viewer */}
//         <div className="flex-1 min-h-0 overflow-auto p-4 bg-gray-100 dark:bg-gray-900">
//           <div className="flex justify-center">
//             <Document
//               file={selectedDocument ? { url: URL.createObjectURL(new Blob(['Mock PDF content'], { type: 'application/pdf' })) } : null}
//               onLoadSuccess={onDocumentLoadSuccess}
//               onLoadError={(error) => console.error('PDF load error:', error)}
//               loading={
//                 <div className="flex flex-col items-center justify-center h-64">
//                   <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-healthcare-primary"></div>
//                   <p className="mt-4 text-gray-600 dark:text-gray-400">Loading PDF...</p>
//                 </div>
//               }
//             >
//               <Page 
//                 pageNumber={pageNumber} 
//                 scale={scale}
//                 rotate={rotation}
//                 loading={
//                   <div className="flex items-center justify-center h-64">
//                     <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-healthcare-primary"></div>
//                   </div>
//                 }
//                 className="shadow-lg"
//               />
//             </Document>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex-shrink-0 p-4 border-t border-gray-200 dark:border-gray-600">
//           <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
//             <span>PDF Viewer - Healthcare Document Assistant</span>
//             <span>File size: {selectedDocument ? (selectedDocument.size / 1024 / 1024).toFixed(2) : 0} MB</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DocumentPreview;