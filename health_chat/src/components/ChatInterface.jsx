// // src/components/ChatInterface/ChatInterface.jsx
// import React, { useState, useRef, useEffect } from 'react';
// import { useApp } from '../../contexts/AppContext';
// import MessageBubble from '../MessageBubble/MessageBubble';
// import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
// import { FiSend, FiPaperclip } from 'react-icons/fi';

// const ChatInterface = () => {
//   const { chatHistory, sendMessage, isLoading } = useApp();
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const messagesEndRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [chatHistory]);

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
    
//     if (!inputMessage.trim() || isLoading) return;

//     const message = inputMessage.trim();
//     setInputMessage('');
//     setIsTyping(true);

//     try {
//       await sendMessage(message);
//     } catch (error) {
//       console.error('Failed to send message:', error);
//     } finally {
//       setIsTyping(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage(e);
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-[600px] flex flex-col">
//       {/* Chat Header */}
//       <div className="p-4 border-b border-gray-200">
//         <h2 className="text-xl font-semibold text-gray-800">Document Chat</h2>
//         <p className="text-sm text-gray-600">Ask questions about your uploaded documents</p>
//       </div>

//       {/* Messages Area */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-4">
//         {chatHistory.length === 0 ? (
//           <div className="text-center text-gray-500 mt-8">
//             <p>Start a conversation by asking about your documents</p>
//             <div className="mt-4 text-sm space-y-1">
//               <p>Try asking:</p>
//               <p className="text-healthcare-primary">"What medications were prescribed?"</p>
//               <p className="text-healthcare-primary">"Show me lab results from the reports"</p>
//             </div>
//           </div>
//         ) : (
//           chatHistory.map((message) => (
//             <MessageBubble key={message.id} message={message} />
//           ))
//         )}
        
//         {isTyping && (
//           <div className="flex items-center space-x-2 text-gray-500">
//             <LoadingSpinner size="small" />
//             <span>AI is typing...</span>
//           </div>
//         )}
        
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input Area */}
//       <div className="p-4 border-t border-gray-200">
//         <form onSubmit={handleSendMessage} className="flex space-x-2">
//           <div className="flex-1 relative">
//             <textarea
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               onKeyPress={handleKeyPress}
//               placeholder="Type your message... (Press Enter to send)"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-healthcare-primary focus:border-transparent"
//               rows="1"
//               style={{ minHeight: '50px', maxHeight: '120px' }}
//             />
            
//             <div className="absolute bottom-2 right-2 text-xs text-gray-400">
//               {inputMessage.length}/1000
//             </div>
//           </div>
          
//           <button
//             type="submit"
//             disabled={!inputMessage.trim() || isLoading}
//             className="px-6 py-3 bg-healthcare-primary text-white rounded-lg hover:bg-healthcare-secondary disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
//           >
//             <FiSend size={18} />
//           </button>
//         </form>
        
//         <div className="text-xs text-gray-500 mt-2">
//           Your conversations are processed securely and are not stored permanently.
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatInterface;











import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '/src/contexts/AppContext';
import MessageBubble from '/src/components/MessageBubble.jsx';
import { FiSend } from 'react-icons/fi';

const ChatInterface = () => {
  const { chatHistory, sendMessage, isLoading } = useApp();
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!inputMessage.trim() || isLoading) return;

    const message = inputMessage.trim();
    setInputMessage('');

    try {
      await sendMessage(message);
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-[600px] flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Document Chat</h2>
        <p className="text-sm text-gray-600">Ask questions about your uploaded documents</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatHistory.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <p>Start a conversation by asking about your documents</p>
            <div className="mt-4 text-sm space-y-1">
              <p>Try asking:</p>
              <p className="text-blue-500">"What medications were prescribed?"</p>
              <p className="text-blue-500">"Show me lab results from the reports"</p>
            </div>
          </div>
        ) : (
          chatHistory.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))
        )}
        
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-200">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <div className="flex-1 relative">
            <textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message... (Press Enter to send)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="1"
              style={{ minHeight: '50px', maxHeight: '120px' }}
            />
            
            <div className="absolute bottom-2 right-2 text-xs text-gray-400">
              {inputMessage.length}/1000
            </div>
          </div>
          
          <button
            type="submit"
            disabled={!inputMessage.trim() || isLoading}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
          >
            <FiSend size={18} />
          </button>
        </form>
        
        <div className="text-xs text-gray-500 mt-2">
          Your conversations are processed securely.
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;