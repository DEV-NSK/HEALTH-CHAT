export const mockDocuments = [
  {
    id: '1',
    name: 'discharge_summary.pdf',
    type: 'application/pdf',
    size: 245760,
    uploadDate: '2024-09-20T10:30:00Z',
    status: 'processed'
  },
  {
    id: '2', 
    name: 'lab_report.docx',
    type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    size: 153600,
    uploadDate: '2024-09-20T11:15:00Z',
    status: 'processed'
  }
];

export const mockMessages = [
  {
    id: '1',
    type: 'user',
    content: 'What medications were prescribed in the discharge summary?',
    timestamp: '2024-09-20T11:00:00Z'
  },
  {
    id: '2',
    type: 'system',
    content: 'Based on the discharge summary, the following medications were prescribed:\n\n• Lisinopril 10mg daily for blood pressure\n• Metformin 500mg twice daily for diabetes management\n• Atorvastatin 20mg daily for cholesterol control\n\nPlease consult with your healthcare provider for personalized dosage instructions and any potential side effects.',
    timestamp: '2024-09-20T11:00:15Z',
    sources: ['discharge_summary.pdf - Page 2']
  }
];