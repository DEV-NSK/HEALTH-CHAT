// // src/components/MedicalDisclaimer/MedicalDisclaimer.jsx
// import React from 'react';
// import { useApp } from '../../contexts/AppContext';

// const MedicalDisclaimer = () => {
//   const { acceptDisclaimer } = useApp();

//   const handleAccept = () => {
//     acceptDisclaimer();
//   };

//   return (
//     <div className="min-h-screen bg-healthcare-background flex items-center justify-center p-4">
//       <div className="max-w-2xl bg-white rounded-lg shadow-lg p-8">
//         <div className="text-center mb-6">
//           <h1 className="text-3xl font-bold text-healthcare-primary mb-2">
//             Healthcare Document Assistant
//           </h1>
//           <div className="w-16 h-1 bg-healthcare-accent mx-auto"></div>
//         </div>

//         <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
//           <div className="flex items-center mb-2">
//             <span className="text-red-600 font-semibold text-lg">⚠️ Important Medical Disclaimer</span>
//           </div>
//         </div>

//         <div className="space-y-4 mb-6">
//           <p className="text-gray-700">
//             This application is designed to help you understand and interact with your healthcare documents. 
//             However, it is crucial to understand the following:
//           </p>

//           <ul className="space-y-2 text-gray-700">
//             <li className="flex items-start">
//               <span className="text-red-500 mr-2">•</span>
//               <span><strong>Not Medical Advice:</strong> The information provided by this application is for informational purposes only and does not constitute medical advice.</span>
//             </li>
//             <li className="flex items-start">
//               <span className="text-red-500 mr-2">•</span>
//               <span><strong>Consult Professionals:</strong> Always consult with qualified healthcare professionals for medical diagnoses and treatment decisions.</span>
//             </li>
//             <li className="flex items-start">
//               <span className="text-red-500 mr-2">•</span>
//               <span><strong>Accuracy Not Guaranteed:</strong> While we strive for accuracy, the AI may not always interpret medical information correctly.</span>
//             </li>
//             <li className="flex items-start">
//               <span className="text-red-500 mr-2">•</span>
//               <span><strong>Emergency Situations:</strong> In case of medical emergencies, contact emergency services immediately.</span>
//             </li>
//           </ul>

//           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//             <p className="text-blue-700 text-sm">
//               <strong>Privacy Note:</strong> Your documents are processed locally whenever possible. 
//               We prioritize the security and confidentiality of your health information.
//             </p>
//           </div>
//         </div>

//         <div className="text-center">
//           <button
//             onClick={handleAccept}
//             className="bg-healthcare-primary hover:bg-healthcare-secondary text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
//           >
//             I Understand and Accept the Terms
//           </button>
          
//           <p className="text-gray-500 text-sm mt-4">
//             By clicking this button, you acknowledge that you have read and understood this disclaimer.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MedicalDisclaimer;











import React from 'react';
import { useApp } from '/src/contexts/AppContext';

const MedicalDisclaimer = () => {
  const { acceptDisclaimer } = useApp();

  const handleAccept = () => {
    acceptDisclaimer();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">
            Healthcare Document Assistant
          </h1>
          <div className="w-16 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center mb-2">
            <span className="text-red-600 font-semibold text-lg">⚠️ Important Medical Disclaimer</span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <p className="text-gray-700">
            This application is designed to help you understand and interact with your healthcare documents. 
            However, it is crucial to understand the following:
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span><strong>Not Medical Advice:</strong> The information provided is for informational purposes only and does not constitute medical advice.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span><strong>Consult Professionals:</strong> Always consult with qualified healthcare professionals for medical decisions.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span><strong>Accuracy Not Guaranteed:</strong> The AI may not always interpret medical information correctly.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span><strong>Emergency Situations:</strong> In case of medical emergencies, contact emergency services immediately.</span>
            </li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-700 text-sm">
              <strong>Privacy Note:</strong> Your documents are processed locally whenever possible. 
              We prioritize the security and confidentiality of your health information.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleAccept}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
          >
            I Understand and Accept the Terms
          </button>
          
          <p className="text-gray-500 text-sm mt-4">
            By clicking this button, you acknowledge that you have read and understood this disclaimer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalDisclaimer;