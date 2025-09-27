// // // // // // // // src/components/MedicalDisclaimer/MedicalDisclaimer.jsx
// // // // // // // import React, { useState } from 'react';
// // // // // // // import { FiAlertTriangle, FiCheck, FiX } from 'react-icons/fi';

// // // // // // // const MedicalDisclaimer = () => {
// // // // // // //   const [isAccepted, setIsAccepted] = useState(false);
// // // // // // //   const [isVisible, setIsVisible] = useState(true);

// // // // // // //   if (!isVisible) return null;

// // // // // // //   return (
// // // // // // //     <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
// // // // // // //       <div className="flex items-start space-x-3">
// // // // // // //         <FiAlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
        
// // // // // // //         <div className="flex-1">
// // // // // // //           <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
// // // // // // //             Important Medical Disclaimer
// // // // // // //           </h3>
          
// // // // // // //           <div className="text-sm text-yellow-700 dark:text-yellow-400 space-y-2">
// // // // // // //             <p>
// // // // // // //               <strong>This is an AI-powered assistant for informational purposes only.</strong>
// // // // // // //             </p>
// // // // // // //             <p>
// // // // // // //               • Not a substitute for professional medical advice, diagnosis, or treatment
// // // // // // //             </p>
// // // // // // //             <p>
// // // // // // //               • Always consult qualified healthcare providers for medical decisions
// // // // // // //             </p>
// // // // // // //             <p>
// // // // // // //               • Information provided may not be complete or accurate
// // // // // // //             </p>
// // // // // // //             <p>
// // // // // // //               • Emergency situations: Contact emergency services immediately
// // // // // // //             </p>
// // // // // // //           </div>

// // // // // // //           {!isAccepted && (
// // // // // // //             <div className="mt-3 flex items-center space-x-3">
// // // // // // //               <button
// // // // // // //                 onClick={() => setIsAccepted(true)}
// // // // // // //                 className="inline-flex items-center px-3 py-1 bg-yellow-600 text-white text-sm rounded hover:bg-yellow-700 transition-colors duration-200"
// // // // // // //               >
// // // // // // //                 <FiCheck className="w-4 h-4 mr-1" />
// // // // // // //                 I Understand
// // // // // // //               </button>
// // // // // // //               <button
// // // // // // //                 onClick={() => setIsVisible(false)}
// // // // // // //                 className="inline-flex items-center px-3 py-1 text-yellow-600 text-sm rounded hover:bg-yellow-100 dark:hover:bg-yellow-800/30 transition-colors duration-200"
// // // // // // //               >
// // // // // // //                 <FiX className="w-4 h-4 mr-1" />
// // // // // // //                 Dismiss
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //           )}

// // // // // // //           {isAccepted && (
// // // // // // //             <div className="mt-2 text-xs text-yellow-600 dark:text-yellow-400">
// // // // // // //               ✓ Disclaimer acknowledged - Use this tool responsibly
// // // // // // //             </div>
// // // // // // //           )}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default MedicalDisclaimer;



// // src/components/MedicalDisclaimer/MedicalDisclaimer.jsx
// import React, { useState } from 'react';
// import { FiAlertTriangle, FiCheck, FiX, FiShield } from 'react-icons/fi';

// const MedicalDisclaimer = ({ onAccept, onReject, isModal = false }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   const handleAccept = () => {
//     setIsVisible(false);
//     onAccept();
//   };

//   const handleReject = () => {
//     setIsVisible(false);
//     onReject();
//   };

//   if (!isVisible) return null;

//   if (isModal) {
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//         <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//           {/* Modal Header */}
//           <div className="bg-healthcare-primary text-white p-6 rounded-t-xl">
//             <div className="flex items-center space-x-3">
//               <FiShield className="w-8 h-8" />
//               <div>
//                 <h2 className="text-2xl font-bold">Important Medical Disclaimer</h2>
//                 <p className="text-blue-100 mt-1">Please read carefully before proceeding</p>
//               </div>
//             </div>
//           </div>

//           {/* Modal Content */}
//           <div className="p-6 space-y-4">
//             <div className="flex items-start space-x-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
//               <FiAlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
//               <div>
//                 <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
//                   Critical Information
//                 </h3>
//                 <p className="text-yellow-700 dark:text-yellow-400 text-sm">
//                   This application is for informational purposes only and is not a substitute for professional medical advice.
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-3 text-gray-700 dark:text-gray-300">
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <h4 className="font-semibold text-healthcare-primary">What this tool provides:</h4>
//                   <ul className="text-sm space-y-1">
//                     <li className="flex items-start space-x-2">
//                       <FiCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
//                       <span>Document analysis and organization</span>
//                     </li>
//                     <li className="flex items-start space-x-2">
//                       <FiCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
//                       <span>Information extraction from uploaded files</span>
//                     </li>
//                     <li className="flex items-start space-x-2">
//                       <FiCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
//                       <span>General health information discussion</span>
//                     </li>
//                   </ul>
//                 </div>
                
//                 <div className="space-y-2">
//                   <h4 className="font-semibold text-red-500">What this tool cannot do:</h4>
//                   <ul className="text-sm space-y-1">
//                     <li className="flex items-start space-x-2">
//                       <FiX className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
//                       <span>Provide medical diagnoses</span>
//                     </li>
//                     <li className="flex items-start space-x-2">
//                       <FiX className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
//                       <span>Replace healthcare professionals</span>
//                     </li>
//                     <li className="flex items-start space-x-2">
//                       <FiX className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
//                       <span>Handle emergency situations</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>

//               <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
//                 <h4 className="font-semibold mb-2">Emergency Situations</h4>
//                 <p className="text-sm">
//                   If you are experiencing a medical emergency, please call your local emergency services immediately. 
//                   Do not rely on this application for urgent medical needs.
//                 </p>
//               </div>

//               <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
//                 By clicking "I Accept", you acknowledge that you have read and understand this disclaimer.
//               </div>
//             </div>
//           </div>

//           {/* Modal Actions */}
//           <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200 dark:border-gray-600">
//             <button
//               onClick={handleReject}
//               className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium"
//             >
//               I Do Not Accept
//             </button>
//             <button
//               onClick={handleAccept}
//               className="flex-1 px-6 py-3 bg-healthcare-primary text-white rounded-lg hover:bg-healthcare-secondary transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
//             >
//               <FiCheck className="w-5 h-5" />
//               <span>I Accept & Continue</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Original inline version (for reference, not used in modal flow)
//   return (
//     <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
//       <div className="flex items-start space-x-3">
//         <FiAlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
        
//         <div className="flex-1">
//           <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
//             Important Medical Disclaimer
//           </h3>
          
//           <div className="text-sm text-yellow-700 dark:text-yellow-400 space-y-2">
//             <p>
//               <strong>This is an AI-powered assistant for informational purposes only.</strong>
//             </p>
//             <p>• Not a substitute for professional medical advice, diagnosis, or treatment</p>
//             <p>• Always consult qualified healthcare providers for medical decisions</p>
//             <p>• Information provided may not be complete or accurate</p>
//             <p>• Emergency situations: Contact emergency services immediately</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MedicalDisclaimer;














// src/components/MedicalDisclaimer/MedicalDisclaimer.jsx
import React, { useState } from 'react';
import { FiAlertTriangle, FiCheck, FiX, FiShield } from 'react-icons/fi';

const MedicalDisclaimer = ({ onAccept, onReject, isModal = false }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    onAccept();
  };

  const handleReject = () => {
    setIsVisible(false);
    onReject();
  };

  if (!isVisible) return null;

  if (isModal) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          {/* Modal Header */}
          <div className="bg-healthcare-primary text-white p-6 rounded-t-xl flex-shrink-0">
            <div className="flex items-center space-x-3">
              <FiShield className="w-8 h-8" />
              <div>
                <h2 className="text-2xl font-bold">Important Medical Disclaimer</h2>
                <p className="text-blue-100 mt-1">Please read carefully before proceeding</p>
              </div>
            </div>
          </div>

          {/* Modal Content - Scrollable area */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-4">
              <div className="flex items-start space-x-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                <FiAlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                    Critical Information
                  </h3>
                  <p className="text-yellow-700 dark:text-yellow-400 text-sm">
                    This application is for informational purposes only and is not a substitute for professional medical advice.
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-healthcare-primary">What this tool provides:</h4>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-start space-x-2">
                        <FiCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Document analysis and organization</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FiCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Information extraction from uploaded files</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FiCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>General health information discussion</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-red-500">What this tool cannot do:</h4>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-start space-x-2">
                        <FiX className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Provide medical diagnoses</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FiX className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Replace healthcare professionals</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <FiX className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Handle emergency situations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Emergency Situations</h4>
                  <p className="text-sm">
                    If you are experiencing a medical emergency, please call your local emergency services immediately. 
                    Do not rely on this application for urgent medical needs.
                  </p>
                </div>

                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  By clicking "I Accept", you acknowledge that you have read and understand this disclaimer.
                </div>
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="flex flex-col sm:flex-row gap-3 p-6 border-t border-gray-200 dark:border-gray-600 flex-shrink-0">
            <button
              onClick={handleReject}
              className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              I Do Not Accept
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 px-6 py-3 bg-healthcare-primary text-white rounded-lg hover:bg-healthcare-secondary transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
            >
              <FiCheck className="w-5 h-5" />
              <span>I Accept & Continue</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Original inline version (for reference, not used in modal flow)
  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
      <div className="flex items-start space-x-3">
        <FiAlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
        
        <div className="flex-1">
          <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
            Important Medical Disclaimer
          </h3>
          
          <div className="text-sm text-yellow-700 dark:text-yellow-400 space-y-2">
            <p>
              <strong>This is an AI-powered assistant for informational purposes only.</strong>
            </p>
            <p>• Not a substitute for professional medical advice, diagnosis, or treatment</p>
            <p>• Always consult qualified healthcare providers for medical decisions</p>
            <p>• Information provided may not be complete or accurate</p>
            <p>• Emergency situations: Contact emergency services immediately</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalDisclaimer;