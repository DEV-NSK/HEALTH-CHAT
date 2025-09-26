import React from 'react';
import { useApp } from '/src/contexts/AppContext';
import { FiX } from 'react-icons/fi';

const DocumentPreview = () => {
  const { activeDocument, setActiveDocument } = useApp();

  if (!activeDocument) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">{activeDocument.name}</h3>
          <button
            onClick={() => setActiveDocument(null)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <FiX size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-auto p-4">
          <div className="space-y-4">
            <div>
              <strong>File Name:</strong> {activeDocument.name}
            </div>
            <div>
              <strong>Type:</strong> {activeDocument.type}
            </div>
            <div>
              <strong>Size:</strong> {activeDocument.size} bytes
            </div>
            <div>
              <strong>Uploaded:</strong> {new Date(activeDocument.uploadDate).toLocaleString()}
            </div>
            <div>
              <strong>Status:</strong> {activeDocument.status}
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              Document preview functionality would be implemented here with a proper document viewer.
              For now, this is a placeholder showing document metadata.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPreview;