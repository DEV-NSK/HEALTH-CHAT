// // src/App.jsx
// import React, { useState, useEffect } from 'react';
// import { AppProvider, useApp } from './contexts/AppContext';
// import DocumentUpload from './components/DocumentUpload/DocumentUpload';
// import DocumentList from './components/DocumentList/DocumentList';
// import ChatInterface from './components/ChatInterface/ChatInterface';
// import MedicalDisclaimer from './components/MedicalDisclaimer/MedicalDisclaimer';
// import DocumentPreview from './components/DocumentPreview/DocumentPreview';
// import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

// function AppContent() {
//   const {
//     documents,
//     chatHistory,
//     activeDocument,
//     isDisclaimerAccepted,
//     isLoading,
//     error
//   } = useApp();

//   if (!isDisclaimerAccepted) {
//     return <MedicalDisclaimer />;
//   }

//   return (
//     <div className="min-h-screen bg-healthcare-background">
//       {isLoading && <LoadingSpinner />}

//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-4">
//           {error}
//         </div>
//       )}

//       <div className="container mx-auto px-4 py-6">
//         <header className="mb-8">
//           <h1 className="text-3xl font-bold text-healthcare-primary">
//             Healthcare Document Assistant
//           </h1>
//           <p className="text-gray-600">Upload your documents and chat with AI about their content</p>
//         </header>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Left Panel - Document Management */}
//           <div className="lg:col-span-1 space-y-6">
//             <DocumentUpload />
//             <DocumentList documents={documents} />
//           </div>

//           {/* Right Panel - Chat Interface */}
//           <div className="lg:col-span-2">
//             <ChatInterface />
//           </div>
//         </div>
//       </div>

//       {activeDocument && <DocumentPreview />}
//     </div>
//   );
// }

// function App() {
//   return (
//     <AppProvider>
//       <AppContent />
//     </AppProvider>
//   );
// }

// export default App;

import React from "react";
import { AppProvider, useApp } from './contexts/AppContext'; 
import DocumentUpload from "./components/DocumentUpload.jsx";
import DocumentList from "./components/DocumentList.jsx";
import ChatInterface from "./components/ChatInterface.jsx";
import MedicalDisclaimer from "./components/MedicalDisclaimer.jsx";
import DocumentPreview from "./components/DocumentPreview.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

function AppContent() {
  const { documents, isDisclaimerAccepted, isLoading, error } = useApp();

  if (!isDisclaimerAccepted) {
    return <MedicalDisclaimer />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {isLoading && <LoadingSpinner />}

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative m-4">
          {error}
        </div>
      )}

      <div className="container mx-auto px-4 py-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600">
            Healthcare Document Assistant
          </h1>
          <p className="text-gray-600">
            Upload your documents and chat with AI about their content
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <DocumentUpload />
            <DocumentList />
          </div>

          <div className="lg:col-span-2">
            <ChatInterface />
          </div>
        </div>
      </div>

      <DocumentPreview />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;
