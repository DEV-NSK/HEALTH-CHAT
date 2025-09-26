import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { uploadDocument, deleteDocument, sendMessage, getChatHistory } from '../services/api';

const AppContext = createContext();

const initialState = {
  documents: [],
  chatHistory: [],
  activeDocument: null,
  isDisclaimerAccepted: localStorage.getItem('disclaimerAccepted') === 'true',
  isLoading: false,
  error: null
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    
    case 'ACCEPT_DISCLAIMER':
      localStorage.setItem('disclaimerAccepted', 'true');
      return { ...state, isDisclaimerAccepted: true };
    
    case 'SET_DOCUMENTS':
      return { ...state, documents: action.payload };
    
    case 'ADD_DOCUMENT':
      return { 
        ...state, 
        documents: [...state.documents, action.payload] 
      };
    
    case 'REMOVE_DOCUMENT':
      return {
        ...state,
        documents: state.documents.filter(doc => doc.id !== action.payload)
      };
    
    case 'SET_ACTIVE_DOCUMENT':
      return { ...state, activeDocument: action.payload };
    
    case 'SET_CHAT_HISTORY':
      return { ...state, chatHistory: action.payload };
    
    case 'ADD_MESSAGE':
      return {
        ...state,
        chatHistory: [...state.chatHistory, action.payload]
      };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const actions = {
    acceptDisclaimer: () => dispatch({ type: 'ACCEPT_DISCLAIMER' }),
    
    setLoading: (loading) => dispatch({ type: 'SET_LOADING', payload: loading }),
    
    setError: (error) => dispatch({ type: 'SET_ERROR', payload: error }),
    
    clearError: () => dispatch({ type: 'CLEAR_ERROR' }),
    
    uploadDocument: async (file) => {
      try {
        dispatch({ type: 'SET_LOADING', payload: true });
        const document = await uploadDocument(file);
        dispatch({ type: 'ADD_DOCUMENT', payload: document });
        return document;
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
        throw error;
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    },
    
    deleteDocument: async (documentId) => {
      try {
        await deleteDocument(documentId);
        dispatch({ type: 'REMOVE_DOCUMENT', payload: documentId });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
        throw error;
      }
    },
    
    sendMessage: async (message) => {
      try {
        // Add user message immediately
        const userMessage = {
          id: Date.now().toString(),
          type: 'user',
          content: message,
          timestamp: new Date().toISOString()
        };
        dispatch({ type: 'ADD_MESSAGE', payload: userMessage });
        
        // Get AI response
        const response = await sendMessage(message);
        dispatch({ type: 'ADD_MESSAGE', payload: response });
        return response;
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
        throw error;
      }
    },
    
    setActiveDocument: (document) => 
      dispatch({ type: 'SET_ACTIVE_DOCUMENT', payload: document }),
    
    loadChatHistory: async () => {
      try {
        const history = await getChatHistory();
        dispatch({ type: 'SET_CHAT_HISTORY', payload: history });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
      }
    }
  };

  useEffect(() => {
    actions.loadChatHistory();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, ...actions }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}