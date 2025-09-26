// src/components/MedicalDisclaimer/MedicalDisclaimer.jsx
import React, { useState } from 'react';
import { FiAlertTriangle, FiCheck, FiX } from 'react-icons/fi';

const MedicalDisclaimer = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

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
            <p>
              • Not a substitute for professional medical advice, diagnosis, or treatment
            </p>
            <p>
              • Always consult qualified healthcare providers for medical decisions
            </p>
            <p>
              • Information provided may not be complete or accurate
            </p>
            <p>
              • Emergency situations: Contact emergency services immediately
            </p>
          </div>

          {!isAccepted && (
            <div className="mt-3 flex items-center space-x-3">
              <button
                onClick={() => setIsAccepted(true)}
                className="inline-flex items-center px-3 py-1 bg-yellow-600 text-white text-sm rounded hover:bg-yellow-700 transition-colors duration-200"
              >
                <FiCheck className="w-4 h-4 mr-1" />
                I Understand
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="inline-flex items-center px-3 py-1 text-yellow-600 text-sm rounded hover:bg-yellow-100 dark:hover:bg-yellow-800/30 transition-colors duration-200"
              >
                <FiX className="w-4 h-4 mr-1" />
                Dismiss
              </button>
            </div>
          )}

          {isAccepted && (
            <div className="mt-2 text-xs text-yellow-600 dark:text-yellow-400">
              ✓ Disclaimer acknowledged - Use this tool responsibly
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicalDisclaimer;