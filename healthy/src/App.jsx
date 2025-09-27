// // // // src/App.jsx
// // // import React, { useState } from "react";
// // // import { ThemeProvider } from "./contexts/ThemeContext";
// // // import { AppProvider } from "./contexts/AppContext";
// // // import SearchBar from "./components/SearchBar";
// // // import DocumentUpload from "./components/DocumentUpload";
// // // import DocumentList from "./components/DocumentList";
// // // import ChatInterface from "./components/ChatInterface";
// // // import ThemeToggle from "./components/ThemeToggle";
// // // import { FiMenu, FiX, FiMessageSquare, FiFileText } from "react-icons/fi";
// // // import "./styles/index.css";

// // // function App() {
// // //   const [activeView, setActiveView] = useState("chat"); // 'chat' or 'documents'
// // //   const [showMobileMenu, setShowMobileMenu] = useState(false);

// // //   return (
// // //     <ThemeProvider>
// // //       <AppProvider>
// // //         <div className="h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 overflow-hidden flex flex-col">
// // //           {/* Header Section - Fixed height */}
// // //           <div className="flex-shrink-0 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
// // //             <div className="container mx-auto px-4 py-3">
// // //               {/* Mobile Header */}
// // //               <div className="lg:hidden flex items-center justify-between mb-3">
// // //                 <h1 className="text-lg font-bold text-healthcare-primary dark:text-healthcare-secondary">
// // //                   Healthcare Assistant
// // //                 </h1>
// // //                 <div className="flex items-center space-x-2">
// // //                   <ThemeToggle />
// // //                   <button
// // //                     onClick={() => setShowMobileMenu(!showMobileMenu)}
// // //                     className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
// // //                   >
// // //                     {showMobileMenu ? (
// // //                       <FiX className="w-4 h-4" />
// // //                     ) : (
// // //                       <FiMenu className="w-4 h-4" />
// // //                     )}
// // //                   </button>
// // //                 </div>
// // //               </div>

// // //               {/* Desktop Header */}
// // //               <div className="hidden lg:flex justify-between items-center mb-3">
// // //                 <h1 className="text-xl font-bold text-healthcare-primary dark:text-healthcare-secondary">
// // //                   Healthcare Assistant
// // //                 </h1>
// // //                 <ThemeToggle />
// // //               </div>

// // //               {/* Search Bar */}
// // //               <SearchBar />
// // //             </div>
// // //           </div>

// // //           {/* Mobile View Toggle */}
// // //           <div className="lg:hidden flex-shrink-0 border-b border-gray-200 dark:border-gray-700">
// // //             <div className="flex">
// // //               <button
// // //                 onClick={() => setActiveView("chat")}
// // //                 className={`flex-1 flex items-center justify-center py-3 space-x-2 transition-colors duration-200 ${
// // //                   activeView === "chat"
// // //                     ? "bg-healthcare-primary text-white"
// // //                     : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
// // //                 }`}
// // //               >
// // //                 <FiMessageSquare className="w-4 h-4" />
// // //                 <span>Chat</span>
// // //               </button>
// // //               <button
// // //                 onClick={() => setActiveView("documents")}
// // //                 className={`flex-1 flex items-center justify-center py-3 space-x-2 transition-colors duration-200 ${
// // //                   activeView === "documents"
// // //                     ? "bg-healthcare-primary text-white"
// // //                     : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
// // //                 }`}
// // //               >
// // //                 <FiFileText className="w-4 h-4" />
// // //                 <span>Documents</span>
// // //               </button>
// // //             </div>
// // //           </div>

// // //           {/* Main Content - Scrollable area */}
// // //           <div className="flex-1 min-h-0 overflow-hidden">
// // //             <div className="container mx-auto h-full">
// // //               {/* Desktop Layout */}
// // //               <div className="hidden lg:block h-full">
// // //                 <div className="px-4 py-4 h-full">
// // //                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
// // //                     {/* Left Sidebar - Document Management */}
// // //                     <div className="lg:col-span-1 flex flex-col gap-4 h-full">
// // //                       <div className="flex-shrink-0">
// // //                         <DocumentUpload />
// // //                       </div>
// // //                       <div className="flex-1 min-h-0">
// // //                         <DocumentList />
// // //                       </div>
// // //                     </div>

// // //                     {/* Right Side - Chat Interface */}
// // //                     <div className="lg:col-span-2 h-full flex flex-col min-h-0">
// // //                       <ChatInterface />
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Mobile Layout */}
// // //               <div className="lg:hidden h-full">
// // //                 {activeView === "chat" ? (
// // //                   <div className="h-full">
// // //                     <ChatInterface />
// // //                   </div>
// // //                 ) : (
// // //                   <div className="h-full flex flex-col p-4 space-y-4">
// // //                     <DocumentUpload />
// // //                     <div className="flex-1 min-h-0">
// // //                       <DocumentList />
// // //                     </div>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </AppProvider>
// // //     </ThemeProvider>
// // //   );
// // // }

// // // export default App;





















// // // src/App.jsx
// // import React, { useState } from 'react';
// // import { ThemeProvider } from './contexts/ThemeContext';
// // import { AppProvider } from './contexts/AppContext';
// // import SearchBar from './components/SearchBar';
// // import DocumentUpload from './components/DocumentUpload';
// // import DocumentList from './components/DocumentList';
// // import ChatInterface from './components/ChatInterface';
// // import ThemeToggle from './components/ThemeToggle';
// // import { FiMenu, FiX, FiMessageSquare, FiFileText } from 'react-icons/fi';
// // import './styles/index.css';

// // function App() {
// //   const [activeView, setActiveView] = useState('chat'); // 'chat' or 'documents'
// //   const [showMobileMenu, setShowMobileMenu] = useState(false);

// //   return (
// //     <ThemeProvider>
// //       <AppProvider>
// //         <div className="h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 overflow-hidden flex flex-col">
// //           {/* Header Section - Fixed height */}
// //           <div className="flex-shrink-0 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
// //             <div className="container mx-auto px-4 py-3">
// //               {/* Mobile Header */}
// //               <div className="lg:hidden flex items-center justify-between mb-3">
// //                 <h1 className="text-lg font-bold text-healthcare-primary dark:text-healthcare-secondary">
// //                   Healthcare Assistant
// //                 </h1>
// //                 <div className="flex items-center space-x-2">
// //                   <ThemeToggle />
// //                   <button
// //                     onClick={() => setShowMobileMenu(!showMobileMenu)}
// //                     className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
// //                   >
// //                     {showMobileMenu ? <FiX className="w-4 h-4" /> : <FiMenu className="w-4 h-4" />}
// //                   </button>
// //                 </div>
// //               </div>

// //               {/* Desktop Header */}
// //               <div className="hidden lg:flex justify-between items-center mb-3">
// //                 <h1 className="text-xl font-bold text-healthcare-primary dark:text-healthcare-secondary">
// //                   Healthcare Document Assistant
// //                 </h1>
// //                 <ThemeToggle />
// //               </div>
              
// //               {/* Search Bar - Visible on all screens */}
// //               <SearchBar />
// //             </div>
// //           </div>

// //           {/* Mobile View Toggle - Only on mobile */}
// //           <div className="lg:hidden flex-shrink-0 border-b border-gray-200 dark:border-gray-700">
// //             <div className="flex">
// //               <button
// //                 onClick={() => setActiveView('chat')}
// //                 className={`flex-1 flex items-center justify-center py-3 space-x-2 transition-colors duration-200 ${
// //                   activeView === 'chat'
// //                     ? 'bg-healthcare-primary text-white'
// //                     : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
// //                 }`}
// //               >
// //                 <FiMessageSquare className="w-4 h-4" />
// //                 <span>Chat</span>
// //               </button>
// //               <button
// //                 onClick={() => setActiveView('documents')}
// //                 className={`flex-1 flex items-center justify-center py-3 space-x-2 transition-colors duration-200 ${
// //                   activeView === 'documents'
// //                     ? 'bg-healthcare-primary text-white'
// //                     : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
// //                 }`}
// //               >
// //                 <FiFileText className="w-4 h-4" />
// //                 <span>Documents</span>
// //               </button>
// //             </div>
// //           </div>

// //           {/* Main Content - Scrollable area */}
// //           <div className="flex-1 min-h-0 overflow-hidden">
// //             <div className="h-full">
// //               {/* Desktop Layout - Visible on lg screens and above */}
// //               <div className="hidden lg:block h-full">
// //                 <div className="container mx-auto px-4 py-4 h-full">
// //                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
// //                     {/* Left Sidebar - Document Management */}
// //                     <div className="lg:col-span-1 flex flex-col gap-4 h-full min-h-0">
// //                       <div className="flex-shrink-0">
// //                         <DocumentUpload />
// //                       </div>
// //                       <div className="flex-1 min-h-0">
// //                         <DocumentList />
// //                       </div>
// //                     </div>

// //                     {/* Right Side - Chat Interface */}
// //                     <div className="lg:col-span-2 h-full min-h-0">
// //                       <ChatInterface />
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Mobile Layout - Visible on screens smaller than lg */}
// //               <div className="lg:hidden h-full">
// //                 {activeView === 'chat' ? (
// //                   <div className="h-full min-h-0">
// //                     <ChatInterface />
// //                   </div>
// //                 ) : (
// //                   <div className="h-full flex flex-col min-h-0 p-4 space-y-4">
// //                     <div className="flex-shrink-0">
// //                       <DocumentUpload />
// //                     </div>
// //                     <div className="flex-1 min-h-0">
// //                       <DocumentList />
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </AppProvider>
// //     </ThemeProvider>
// //   );
// // }

// // export default App;


















// // src/App.jsx
// import React, { useState } from 'react';
// import { ThemeProvider } from './contexts/ThemeContext';
// import { AppProvider } from './contexts/AppContext';
// import SearchBar from './components/SearchBar';
// import DocumentUpload from './components/DocumentUpload';
// import DocumentList from './components/DocumentList';
// import ChatInterface from './components/ChatInterface';
// import ThemeToggle from './components/ThemeToggle';
// import MedicalDisclaimer from './components/MedicalDisclaimer';
// // import DocumentPreview from './components/DocumentPreview';
// import { FiMenu, FiX, FiMessageSquare, FiFileText } from 'react-icons/fi';
// import './styles/index.css';

// function App() {
//   const [activeView, setActiveView] = useState('chat');
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const [disclaimerAccepted, setDisclaimerAccepted] = useState(() => {
//     // Check if disclaimer was previously accepted
//     return localStorage.getItem('medicalDisclaimerAccepted') === 'true';
//   });

//   const handleDisclaimerAccept = () => {
//     setDisclaimerAccepted(true);
//     localStorage.setItem('medicalDisclaimerAccepted', 'true');
//   };

//   const handleDisclaimerReject = () => {
//     // Optionally redirect or show a message if user rejects
//     alert('You must accept the medical disclaimer to use this application.');
//   };

//   // Show disclaimer modal if not accepted
//   if (!disclaimerAccepted) {
//     return (
//       <ThemeProvider>
//         <AppProvider>
//           <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
//             <div className="max-w-2xl w-full">
//               <MedicalDisclaimer 
//                 onAccept={handleDisclaimerAccept}
//                 onReject={handleDisclaimerReject}
//                 isModal={true}
//               />
//             </div>
//           </div>
//         </AppProvider>
//       </ThemeProvider>
//     );
//   }

//   // Main application content
//   return (
//     <ThemeProvider>
//       <AppProvider>
//         <div className="h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 overflow-hidden flex flex-col">
//           {/* Header Section - Fixed height */}
//           <div className="flex-shrink-0 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
//             <div className="container mx-auto px-4 py-3">
//               {/* Mobile Header */}
//               <div className="lg:hidden flex items-center justify-between mb-3">
//                 <h1 className="text-lg font-bold text-healthcare-primary dark:text-healthcare-secondary">
//                   Healthcare Assistant
//                 </h1>
//                 <div className="flex items-center space-x-2">
//                   <ThemeToggle />
//                   <button
//                     onClick={() => setShowMobileMenu(!showMobileMenu)}
//                     className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
//                   >
//                     {showMobileMenu ? <FiX className="w-4 h-4" /> : <FiMenu className="w-4 h-4" />}
//                   </button>
//                 </div>
//               </div>

//               {/* Desktop Header */}
//               <div className="hidden lg:flex justify-between items-center mb-3">
//                 <h1 className="text-xl font-bold text-healthcare-primary dark:text-healthcare-secondary">
//                   Healthcare Document Assistant
//                 </h1>
//                 <ThemeToggle />
//               </div>
              
//               {/* Search Bar */}
//               <SearchBar />
//             </div>
//           </div>

//           {/* Mobile View Toggle */}
//           <div className="lg:hidden flex-shrink-0 border-b border-gray-200 dark:border-gray-700">
//             <div className="flex">
//               <button
//                 onClick={() => setActiveView('chat')}
//                 className={`flex-1 flex items-center justify-center py-3 space-x-2 transition-colors duration-200 ${
//                   activeView === 'chat'
//                     ? 'bg-healthcare-primary text-white'
//                     : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
//                 }`}
//               >
//                 <FiMessageSquare className="w-4 h-4" />
//                 <span>Chat</span>
//               </button>
//               <button
//                 onClick={() => setActiveView('documents')}
//                 className={`flex-1 flex items-center justify-center py-3 space-x-2 transition-colors duration-200 ${
//                   activeView === 'documents'
//                     ? 'bg-healthcare-primary text-white'
//                     : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
//                 }`}
//               >
//                 <FiFileText className="w-4 h-4" />
//                 <span>Documents</span>
//               </button>
//             </div>
//           </div>

//           {/* Main Content - Scrollable area */}
//           <div className="flex-1 min-h-0 overflow-hidden">
//             <div className="h-full">
//               {/* Desktop Layout */}
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
//   {/* Left Sidebar - Document Management */}
//   <div className="lg:col-span-1 flex flex-col gap-4 h-full min-h-0">
//     <div className="flex-shrink-0">
//       <DocumentUpload />
//     </div>
//     <div className="flex-1 min-h-0">
//       <DocumentList />
//     </div>
//   </div>

//   {/* Right Side - Chat Interface and Document Preview */}
//   <div className="lg:col-span-2 flex flex-col gap-4 h-full min-h-0">
//     <div className="flex-1 min-h-0">
//       <ChatInterface />
//     </div>
//     {/* <div className="flex-shrink-0">
//       <DocumentPreview />
//     </div> */}
//   </div>
// </div>

//               {/* Mobile Layout */}
//               <div className="lg:hidden h-full">
//                 {activeView === 'chat' ? (
//                   <div className="h-full min-h-0">
//                     <ChatInterface />
//                   </div>
//                 ) : (
//                   <div className="h-full flex flex-col min-h-0 p-4 space-y-4">
//                     <div className="flex-shrink-0">
//                       <DocumentUpload />
//                     </div>
//                     <div className="flex-1 min-h-0">
//                       <DocumentList />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </AppProvider>
//     </ThemeProvider>
//   );
// }

// export default App;

















// src/App.jsx
import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AppProvider } from './contexts/AppContext';
import SearchBar from './components/SearchBar';
import DocumentUpload from './components/DocumentUpload';
import DocumentList from './components/DocumentList';
import ChatInterface from './components/ChatInterface';
import ThemeToggle from './components/ThemeToggle';
import MedicalDisclaimer from './components/MedicalDisclaimer';
// import DocumentPreview from './components/DocumentPreview';
import { FiMenu, FiX, FiMessageSquare, FiFileText } from 'react-icons/fi';
import './styles/index.css';

function App() {
  const [activeView, setActiveView] = useState('chat');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(() => {
    // Check if disclaimer was previously accepted
    return localStorage.getItem('medicalDisclaimerAccepted') === 'true';
  });

  const handleDisclaimerAccept = () => {
    setDisclaimerAccepted(true);
    localStorage.setItem('medicalDisclaimerAccepted', 'true');
  };

  const handleDisclaimerReject = () => {
    // Optionally redirect or show a message if user rejects
    alert('You must accept the medical disclaimer to use this application.');
  };

  // Show disclaimer modal if not accepted
  if (!disclaimerAccepted) {
    return (
      <ThemeProvider>
        <AppProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
              <MedicalDisclaimer 
                onAccept={handleDisclaimerAccept}
                onReject={handleDisclaimerReject}
                isModal={true}
              />
            </div>
          </div>
        </AppProvider>
      </ThemeProvider>
    );
  }

  // Main application content
  return (
    <ThemeProvider>
      <AppProvider>
        <div className="h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 overflow-hidden flex flex-col">
          {/* Header Section - Fixed height */}
          <div className="flex-shrink-0 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 py-3">
              {/* Mobile Header */}
              <div className="lg:hidden flex items-center justify-between mb-3">
                <h1 className="text-lg font-bold text-healthcare-primary dark:text-healthcare-secondary">
                  Healthcare Assistant
                </h1>
                <div className="flex items-center space-x-2">
                  <ThemeToggle />
                  <button
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                  >
                    {showMobileMenu ? <FiX className="w-4 h-4" /> : <FiMenu className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Desktop Header */}
              <div className="hidden lg:flex justify-between items-center mb-3">
                <h1 className="text-xl font-bold text-healthcare-primary dark:text-healthcare-secondary">
                  Healthcare Document Assistant
                </h1>
                <ThemeToggle />
              </div>
              
              {/* Search Bar */}
              <SearchBar />
            </div>
          </div>

          {/* Mobile View Toggle */}
          <div className="lg:hidden flex-shrink-0 border-b border-gray-200 dark:border-gray-700">
            <div className="flex">
              <button
                onClick={() => setActiveView('chat')}
                className={`flex-1 flex items-center justify-center py-3 space-x-2 transition-colors duration-200 ${
                  activeView === 'chat'
                    ? 'bg-healthcare-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
              >
                <FiMessageSquare className="w-4 h-4" />
                <span>Chat</span>
              </button>
              <button
                onClick={() => setActiveView('documents')}
                className={`flex-1 flex items-center justify-center py-3 space-x-2 transition-colors duration-200 ${
                  activeView === 'documents'
                    ? 'bg-healthcare-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
              >
                <FiFileText className="w-4 h-4" />
                <span>Documents</span>
              </button>
            </div>
          </div>

          {/* Main Content - Scrollable area */}
          <div className="flex-1 min-h-0 overflow-hidden">
            {/* Desktop Layout */}
            <div className="hidden lg:block h-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full p-4">
                {/* Left Sidebar - Document Management */}
                <div className="lg:col-span-1 flex flex-col gap-4 h-full min-h-0">
                  <div className="flex-shrink-0">
                    <DocumentUpload />
                  </div>
                  <div className="flex-1 min-h-0">
                    <DocumentList />
                  </div>
                </div>

                {/* Right Side - Chat Interface */}
                <div className="lg:col-span-2 flex flex-col h-full min-h-0">
                  <div className="flex-1 min-h-0">
                    <ChatInterface />
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden h-full">
              {activeView === 'chat' ? (
                <div className="h-full min-h-0">
                  <ChatInterface />
                </div>
              ) : (
                <div className="h-full flex flex-col min-h-0 p-4 space-y-4">
                  <div className="flex-shrink-0">
                    <DocumentUpload />
                  </div>
                  <div className="flex-1 min-h-0">
                    <DocumentList />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;