import { mockDocuments, mockMessages } from './mockData.js';

export const uploadDocument = async (file) => {
  // Simulate API call with delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: file.type,
        size: file.size,
        uploadDate: new Date().toISOString(),
        status: 'processed'
      });
    }, 1000);
  });
};

export const deleteDocument = async (documentId) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true }), 300);
  });
};

export const getDocuments = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockDocuments), 500);
  });
};

export const sendMessage = async (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Math.random().toString(36).substr(2, 9),
        type: 'system',
        content: getMockResponse(message),
        timestamp: new Date().toISOString(),
        sources: ['discharge_summary.pdf - Page 2', 'lab_report.docx - Page 1']
      });
    }, 1500);
  });
};

export const getChatHistory = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockMessages), 300);
  });
};

const getMockResponse = (userMessage) => {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes('medication') || lowerMessage.includes('prescribed')) {
    return "Based on the discharge summary, the patient was prescribed:\n\n• Lisinopril 10mg daily for blood pressure\n• Metformin 500mg twice daily for diabetes\n• Atorvastatin 20mg daily for cholesterol management\n\nPlease consult with your healthcare provider for personalized medical advice.";
  }
  
  if (lowerMessage.includes('lab') || lowerMessage.includes('result')) {
    return "The lab results show:\n\n• HbA1c: 6.8% (within target range)\n• LDL Cholesterol: 98 mg/dL\n• Blood Pressure: 128/82 mmHg\n\nThese results should be interpreted by a qualified healthcare professional.";
  }
  
  if (lowerMessage.includes('diagnosis') || lowerMessage.includes('condition')) {
    return "The documents indicate a diagnosis of Type 2 Diabetes Mellitus and Hypertension. The treatment plan focuses on lifestyle modifications and pharmacological management.";
  }
  
  if (lowerMessage.includes('allerg') || lowerMessage.includes('reaction')) {
    return "No specific allergies are mentioned in the uploaded documents. However, it's important to discuss any known allergies with your healthcare provider.";
  }
  
  if (lowerMessage.includes('summary') || lowerMessage.includes('plan')) {
    return "The treatment plan includes:\n\n1. Regular monitoring of blood glucose and blood pressure\n2. Dietary modifications and exercise\n3. Medication adherence\n4. Follow-up appointments every 3 months\n\nThis is a general summary - please consult your doctor for personalized advice.";
  }
  
  return "I've analyzed your healthcare documents. The information appears to be related to routine management of chronic conditions. For specific medical advice, please consult with your healthcare provider who can consider your complete medical history and current condition.";
};