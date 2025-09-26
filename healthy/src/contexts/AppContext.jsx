// // src/contexts/AppContext.jsx
// import React, { createContext, useContext, useState, useCallback } from 'react';
// import { uploadDocument, sendMessage, getChatHistory, deleteDocument } from '../services/api';

// const AppContext = createContext();

// export const useApp = () => {
//   const context = useContext(AppContext);
//   if (!context) {
//     throw new Error('useApp must be used within an AppProvider');
//   }
//   return context;
// };

// export const AppProvider = ({ children }) => {
//   const [documents, setDocuments] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [isTyping, setIsTyping] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Mock data for development
//   const mockDocuments = [
//     {
//       id: '1',
//       name: 'discharge_summary.pdf',
//       type: 'application/pdf',
//       size: 245760,
//       uploadDate: '2024-09-20T10:30:00Z',
//       status: 'processed'
//     },
//     {
//       id: '2',
//       name: 'lab_results.docx',
//       type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//       size: 153600,
//       uploadDate: '2024-09-20T11:15:00Z',
//       status: 'processed'
//     }
//   ];

//   const mockMessages = [
//     {
//       id: '1',
//       type: 'user',
//       content: 'What medications were prescribed?',
//       timestamp: '2024-09-20T11:00:00Z'
//     },
//     {
//       id: '2',
//       type: 'system',
//       content: 'Based on the discharge summary, the following medications were prescribed: Amoxicillin 500mg, Lisinopril 10mg, and Atorvastatin 20mg.',
//       timestamp: '2024-09-20T11:00:15Z',
//       sources: ['discharge_summary.pdf - Page 2']
//     }
//   ];

//   // Initialize with mock data
//   useState(() => {
//     setDocuments(mockDocuments);
//     setMessages(mockMessages);
//   }, []);

//   const uploadDocumentHandler = useCallback(async (file) => {
//     try {
//       // Simulate upload process
//       const newDocument = {
//         id: Date.now().toString(),
//         name: file.name,
//         type: file.type,
//         size: file.size,
//         uploadDate: new Date().toISOString(),
//         status: 'processing'
//       };

//       setDocuments(prev => [...prev, newDocument]);

//       // Simulate API call
//       setTimeout(() => {
//         setDocuments(prev => 
//           prev.map(doc => 
//             doc.id === newDocument.id 
//               ? { ...doc, status: 'processed' }
//               : doc
//           )
//         );
//       }, 2000);

//     } catch (error) {
//       console.error('Upload error:', error);
//       setDocuments(prev => 
//         prev.map(doc => 
//           doc.id === file.id 
//             ? { ...doc, status: 'error' }
//             : doc
//         )
//       );
//     }
//   }, []);

//   const sendMessageHandler = useCallback(async (content) => {
//     const userMessage = {
//       id: Date.now().toString(),
//       type: 'user',
//       content,
//       timestamp: new Date().toISOString()
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setIsTyping(true);

//     // Simulate AI response after delay
//     setTimeout(() => {
//       const systemMessage = {
//         id: (Date.now() + 1).toString(),
//         type: 'system',
//         content: `I've analyzed your question about "${content}". Based on the uploaded documents, I found relevant information in the healthcare records.`,
//         timestamp: new Date().toISOString(),
//         sources: ['discharge_summary.pdf - Page 1', 'lab_results.docx - Page 3']
//       };

//       setMessages(prev => [...prev, systemMessage]);
//       setIsTyping(false);
//     }, 2000);
//   }, []);

//   const deleteDocumentHandler = useCallback(async (documentId) => {
//     setDocuments(prev => prev.filter(doc => doc.id !== documentId));
//   }, []);

//   const searchMessages = useCallback((query) => {
//     setSearchQuery(query);
//   }, []);

//   const filteredMessages = messages.filter(message =>
//     message.content.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const value = {
//     documents,
//     messages: searchQuery ? filteredMessages : messages,
//     isTyping,
//     uploadDocument: uploadDocumentHandler,
//     sendMessage: sendMessageHandler,
//     deleteDocument: deleteDocumentHandler,
//     searchMessages,
//     searchQuery
//   };

//   return (
//     <AppContext.Provider value={value}>
//       {children}
//     </AppContext.Provider>
//   );
// };












// src/contexts/AppContext.jsx
import React, { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [documents, setDocuments] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const uploadDocumentHandler = useCallback(async (file) => {
    try {
      // Simulate upload process
      const newDocument = {
        id: Date.now().toString(),
        name: file.name,
        type: file.type,
        size: file.size,
        uploadDate: new Date().toISOString(),
        status: 'processing'
      };

      setDocuments(prev => [...prev, newDocument]);

      // Simulate API call
      setTimeout(() => {
        setDocuments(prev => 
          prev.map(doc => 
            doc.id === newDocument.id 
              ? { ...doc, status: 'processed' }
              : doc
          )
        );
      }, 2000);

    } catch (error) {
      console.error('Upload error:', error);
      setDocuments(prev => 
        prev.map(doc => 
          doc.id === file.id 
            ? { ...doc, status: 'error' }
            : doc
        )
      );
    }
  }, []);

  const sendMessageHandler = useCallback(async (content) => {
    const userMessage = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response after delay
    setTimeout(() => {
      const systemMessage = {
        id: (Date.now() + 1).toString(),
        type: 'system',
        content: `I've analyzed your question about "${content}". Based on the uploaded documents, I found relevant information in the healthcare records.`,
        timestamp: new Date().toISOString(),
        sources: documents.length > 0 ? 
          documents.map(doc => `${doc.name} - Page ${Math.floor(Math.random() * 5) + 1}`) : 
          ['No documents available']
      };

      setMessages(prev => [...prev, systemMessage]);
      setIsTyping(false);
    }, 2000);
  }, [documents]);

  const deleteDocumentHandler = useCallback(async (documentId) => {
    setDocuments(prev => prev.filter(doc => doc.id !== documentId));
  }, []);

  const searchMessages = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const filteredMessages = messages.filter(message =>
    message.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const value = {
    documents,
    messages: searchQuery ? filteredMessages : messages,
    isTyping,
    uploadDocument: uploadDocumentHandler,
    sendMessage: sendMessageHandler,
    deleteDocument: deleteDocumentHandler,
    searchMessages,
    searchQuery
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};