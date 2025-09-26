

// // // // src/components/ChatInterface/ChatInterface.jsx
// // // import React, { useState, useRef, useEffect } from 'react';
// // // import { useApp } from '/src/contexts/AppContext';
// // // import MessageBubble from './MessageBubble';
// // // import { FiSend } from 'react-icons/fi';

// // // const ChatInterface = () => {
// // //   const [inputMessage, setInputMessage] = useState('');
// // //   const [isUserTyping, setIsUserTyping] = useState(false);
// // //   const { messages, isTyping, sendMessage } = useApp();
// // //   const messagesEndRef = useRef(null);
// // //   const messagesContainerRef = useRef(null);
// // //   const typingTimeoutRef = useRef(null);

// // //   const scrollToBottom = () => {
// // //     if (messagesEndRef.current) {
// // //       messagesEndRef.current.scrollIntoView({ 
// // //         behavior: 'smooth',
// // //         block: 'end'
// // //       });
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     scrollToBottom();
// // //   }, [messages, isTyping]);

// // //   // Handle user typing indicator
// // //   useEffect(() => {
// // //     if (inputMessage.trim()) {
// // //       setIsUserTyping(true);
// // //       if (typingTimeoutRef.current) {
// // //         clearTimeout(typingTimeoutRef.current);
// // //       }
// // //       typingTimeoutRef.current = setTimeout(() => {
// // //         setIsUserTyping(false);
// // //       }, 1000);
// // //     } else {
// // //       setIsUserTyping(false);
// // //     }

// // //     return () => {
// // //       if (typingTimeoutRef.current) {
// // //         clearTimeout(typingTimeoutRef.current);
// // //       }
// // //     };
// // //   }, [inputMessage]);

// // //   const handleSend = () => {
// // //     if (inputMessage.trim()) {
// // //       sendMessage(inputMessage);
// // //       setInputMessage('');
// // //       setIsUserTyping(false);
// // //     }
// // //   };

// // //   const handleKeyPress = (e) => {
// // //     if (e.key === 'Enter' && !e.shiftKey) {
// // //       e.preventDefault();
// // //       handleSend();
// // //     }
// // //   };

// // //   const handleInputChange = (e) => {
// // //     setInputMessage(e.target.value);
// // //   };

// // //   return (
// // //     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full flex flex-col min-h-0">
// // //       {/* Messages Container - Scrollable */}
// // //       <div 
// // //         ref={messagesContainerRef}
// // //         className="flex-1 min-h-0 overflow-y-auto p-4"
// // //       >
// // //         <div className="space-y-4">
// // //           {messages.map((message) => (
// // //             <MessageBubble key={message.id} message={message} />
// // //           ))}
          
// // //           {/* AI Typing Indicator */}
// // //           {isTyping && (
// // //             <div className="flex items-start space-x-2">
// // //               <div className="flex-shrink-0">
// // //                 <div className="w-8 h-8 bg-healthcare-primary rounded-full flex items-center justify-center">
// // //                   <span className="text-white text-xs font-bold">AI</span>
// // //                 </div>
// // //               </div>
// // //               <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
// // //                 <div className="flex space-x-1">
// // //                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
// // //                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
// // //                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* User Typing Indicator */}
// // //           {isUserTyping && (
// // //             <div className="flex justify-end">
// // //               <div className="bg-healthcare-primary text-white rounded-lg p-3">
// // //                 <div className="flex space-x-1">
// // //                   <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
// // //                   <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
// // //                   <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}
          
// // //           <div ref={messagesEndRef} />
// // //         </div>
// // //       </div>

// // //       {/* Input Area - Fixed at bottom */}
// // //       <div className="border-t border-gray-200 dark:border-gray-600 p-4 flex-shrink-0">
// // //         <div className="flex space-x-2">
// // //           <div className="flex-1 relative">
// // //             <textarea
// // //               value={inputMessage}
// // //               onChange={handleInputChange}
// // //               onKeyPress={handleKeyPress}
// // //               placeholder="Type your message about the healthcare documents..."
// // //               className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3
// // //                        bg-white dark:bg-gray-700 text-gray-900 dark:text-white
// // //                        focus:outline-none focus:ring-2 focus:ring-healthcare-primary
// // //                        resize-none pr-12"
// // //               rows="1"
// // //               maxLength="500"
// // //             />
// // //             {/* Typing indicator inside input */}
// // //             {isUserTyping && (
// // //               <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
// // //                 <div className="w-2 h-2 bg-healthcare-primary rounded-full animate-bounce"></div>
// // //                 <div className="w-2 h-2 bg-healthcare-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
// // //                 <div className="w-2 h-2 bg-healthcare-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
// // //               </div>
// // //             )}
// // //           </div>
// // //           <button
// // //             onClick={handleSend}
// // //             disabled={!inputMessage.trim()}
// // //             className="bg-healthcare-primary hover:bg-healthcare-secondary disabled:bg-gray-300
// // //                      text-white rounded-lg p-3 transition-colors duration-200
// // //                      focus:outline-none focus:ring-2 focus:ring-healthcare-secondary
// // //                      flex items-center justify-center w-12 h-12"
// // //           >
// // //             <FiSend className="w-5 h-5" />
// // //           </button>
// // //         </div>
// // //         <div className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
// // //           {inputMessage.length}/500
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ChatInterface;


















// // // src/components/ChatInterface/ChatInterface.jsx
// // import React, { useState, useRef, useEffect } from 'react';
// // import { useApp } from '/src/contexts/AppContext';
// // import MessageBubble from './MessageBubble';
// // import { FiSend, FiArrowLeft } from 'react-icons/fi';

// // const ChatInterface = () => {
// //   const [inputMessage, setInputMessage] = useState('');
// //   const [isUserTyping, setIsUserTyping] = useState(false);
// //   const { messages, isTyping, sendMessage } = useApp();
// //   const messagesEndRef = useRef(null);
// //   const typingTimeoutRef = useRef(null);

// //   const scrollToBottom = () => {
// //     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
// //   };

// //   useEffect(() => {
// //     scrollToBottom();
// //   }, [messages, isTyping]);

// //   // Handle user typing indicator
// //   useEffect(() => {
// //     if (inputMessage.trim()) {
// //       setIsUserTyping(true);
// //       if (typingTimeoutRef.current) {
// //         clearTimeout(typingTimeoutRef.current);
// //       }
// //       typingTimeoutRef.current = setTimeout(() => {
// //         setIsUserTyping(false);
// //       }, 1000);
// //     } else {
// //       setIsUserTyping(false);
// //     }

// //     return () => {
// //       if (typingTimeoutRef.current) {
// //         clearTimeout(typingTimeoutRef.current);
// //       }
// //     };
// //   }, [inputMessage]);

// //   const handleSend = () => {
// //     if (inputMessage.trim()) {
// //       sendMessage(inputMessage);
// //       setInputMessage('');
// //       setIsUserTyping(false);
// //     }
// //   };

// //   const handleKeyPress = (e) => {
// //     if (e.key === 'Enter' && !e.shiftKey) {
// //       e.preventDefault();
// //       handleSend();
// //     }
// //   };

// //   const handleInputChange = (e) => {
// //     setInputMessage(e.target.value);
// //   };

// //   return (
// //     <div className="bg-white dark:bg-gray-800 h-full flex flex-col">
// //       {/* Messages Container - Scrollable */}
// //       <div className="flex-1 min-h-0 overflow-y-auto p-4">
// //         <div className="space-y-3">
// //           {messages.map((message) => (
// //             <MessageBubble key={message.id} message={message} />
// //           ))}
          
// //           {/* AI Typing Indicator */}
// //           {isTyping && (
// //             <div className="flex items-start space-x-2">
// //               <div className="flex-shrink-0">
// //                 <div className="w-8 h-8 bg-healthcare-primary rounded-full flex items-center justify-center">
// //                   <span className="text-white text-xs font-bold">AI</span>
// //                 </div>
// //               </div>
// //               <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
// //                 <div className="flex space-x-1">
// //                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
// //                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
// //                   <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //           {/* User Typing Indicator */}
// //           {isUserTyping && (
// //             <div className="flex justify-end">
// //               <div className="bg-healthcare-primary text-white rounded-lg p-3">
// //                 <div className="flex space-x-1">
// //                   <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
// //                   <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
// //                   <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
          
// //           <div ref={messagesEndRef} />
// //         </div>
// //       </div>

// //       {/* Input Area - Fixed at bottom */}
// //       <div className="border-t border-gray-200 dark:border-gray-600 p-3 flex-shrink-0">
// //         <div className="flex space-x-2">
// //           <div className="flex-1 relative">
// //             <textarea
// //               value={inputMessage}
// //               onChange={handleInputChange}
// //               onKeyPress={handleKeyPress}
// //               placeholder="Type your message..."
// //               className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3
// //                        bg-white dark:bg-gray-700 text-gray-900 dark:text-white
// //                        focus:outline-none focus:ring-2 focus:ring-healthcare-primary
// //                        resize-none pr-12 text-sm"
// //               rows="1"
// //               maxLength="500"
// //             />
// //             {/* Typing indicator inside input */}
// //             {isUserTyping && (
// //               <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
// //                 <div className="w-1.5 h-1.5 bg-healthcare-primary rounded-full animate-bounce"></div>
// //                 <div className="w-1.5 h-1.5 bg-healthcare-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
// //                 <div className="w-1.5 h-1.5 bg-healthcare-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
// //               </div>
// //             )}
// //           </div>
// //           <button
// //             onClick={handleSend}
// //             disabled={!inputMessage.trim()}
// //             className="bg-healthcare-primary hover:bg-healthcare-secondary disabled:bg-gray-300
// //                      text-white rounded-lg p-3 transition-colors duration-200
// //                      focus:outline-none focus:ring-2 focus:ring-healthcare-secondary
// //                      flex items-center justify-center w-12 h-12"
// //           >
// //             <FiSend className="w-4 h-4" />
// //           </button>
// //         </div>
// //         <div className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">
// //           {inputMessage.length}/500
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ChatInterface;


















// // src/components/ChatInterface/ChatInterface.jsx
// import React, { useState, useRef, useEffect } from 'react';
// import { useApp } from '/src/contexts/AppContext';
// import MessageBubble from './MessageBubble';
// import { FiSend, FiMessageCircle } from 'react-icons/fi';

// const ChatInterface = () => {
//   const [inputMessage, setInputMessage] = useState('');
//   const [isUserTyping, setIsUserTyping] = useState(false);
//   const { messages, isTyping, sendMessage, documents } = useApp();
//   const messagesEndRef = useRef(null);
//   const typingTimeoutRef = useRef(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, isTyping]);

//   // Handle user typing indicator
//   useEffect(() => {
//     if (inputMessage.trim()) {
//       setIsUserTyping(true);
//       if (typingTimeoutRef.current) {
//         clearTimeout(typingTimeoutRef.current);
//       }
//       typingTimeoutRef.current = setTimeout(() => {
//         setIsUserTyping(false);
//       }, 1000);
//     } else {
//       setIsUserTyping(false);
//     }

//     return () => {
//       if (typingTimeoutRef.current) {
//         clearTimeout(typingTimeoutRef.current);
//       }
//     };
//   }, [inputMessage]);

//   const handleSend = () => {
//     if (inputMessage.trim()) {
//       sendMessage(inputMessage);
//       setInputMessage('');
//       setIsUserTyping(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   const handleInputChange = (e) => {
//     setInputMessage(e.target.value);
//   };

//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full flex flex-col">
//       {/* Messages Container - Scrollable */}
//       <div className="flex-1 min-h-0 overflow-y-auto p-4">
//         {messages.length === 0 ? (
//           <div className="h-full flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
//             <FiMessageCircle className="w-16 h-16 mb-4 opacity-30" />
//             <h3 className="text-lg font-medium mb-2">No messages yet</h3>
//             <p className="text-sm text-center mb-4">
//               {documents.length === 0 
//                 ? "Upload healthcare documents to start chatting" 
//                 : "Send a message to start chatting about your documents"}
//             </p>
//             <div className="text-xs text-center space-y-1">
//               <p>Try asking questions like:</p>
//               <p>"What medications are mentioned?"</p>
//               <p>"Summarize the treatment plan"</p>
//               <p>"Are there any allergies listed?"</p>
//             </div>
//           </div>
//         ) : (
//           <div className="space-y-3">
//             {messages.map((message) => (
//               <MessageBubble key={message.id} message={message} />
//             ))}
            
//             {/* AI Typing Indicator */}
//             {isTyping && (
//               <div className="flex items-start space-x-2">
//                 <div className="flex-shrink-0">
//                   <div className="w-8 h-8 bg-healthcare-primary rounded-full flex items-center justify-center">
//                     <span className="text-white text-xs font-bold">AI</span>
//                   </div>
//                 </div>
//                 <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
//                   <div className="flex space-x-1">
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* User Typing Indicator */}
//             {isUserTyping && (
//               <div className="flex justify-end">
//                 <div className="bg-healthcare-primary text-white rounded-lg p-3">
//                   <div className="flex space-x-1">
//                     <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
//                     <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                     <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//                   </div>
//                 </div>
//               </div>
//             )}
            
//             <div ref={messagesEndRef} />
//           </div>
//         )}
//       </div>

//       {/* Input Area - Fixed at bottom */}
//       <div className="border-t border-gray-200 dark:border-gray-600 p-3 flex-shrink-0">
//         <div className="flex space-x-2">
//           <div className="flex-1 relative">
//             <textarea
//               value={inputMessage}
//               onChange={handleInputChange}
//               onKeyPress={handleKeyPress}
//               placeholder={
//                 documents.length === 0 
//                   ? "Upload documents first to start chatting..." 
//                   : "Ask about medications, diagnoses, or treatment plans..."
//               }
//               className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3
//                        bg-white dark:bg-gray-700 text-gray-900 dark:text-white
//                        focus:outline-none focus:ring-2 focus:ring-healthcare-primary
//                        resize-none pr-12 text-sm"
//               rows="1"
//               maxLength="500"
//               disabled={documents.length === 0}
//             />
//             {/* Typing indicator inside input */}
//             {isUserTyping && (
//               <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
//                 <div className="w-1.5 h-1.5 bg-healthcare-primary rounded-full animate-bounce"></div>
//                 <div className="w-1.5 h-1.5 bg-healthcare-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
//                 <div className="w-1.5 h-1.5 bg-healthcare-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
//               </div>
//             )}
//           </div>
//           <button
//             onClick={handleSend}
//             disabled={!inputMessage.trim() || documents.length === 0}
//             className="bg-healthcare-primary hover:bg-healthcare-secondary disabled:bg-gray-300 disabled:cursor-not-allowed
//                      text-white rounded-lg p-3 transition-colors duration-200
//                      focus:outline-none focus:ring-2 focus:ring-healthcare-secondary
//                      flex items-center justify-center w-12 h-12"
//             title={documents.length === 0 ? "Upload documents first" : "Send message"}
//           >
//             <FiSend className="w-4 h-4" />
//           </button>
//         </div>
//         <div className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">
//           {inputMessage.length}/500
//           {documents.length === 0 && (
//             <span className="text-orange-500 ml-2">• Upload documents to enable chat</span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatInterface;













// src/components/ChatInterface/ChatInterface.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '/src/contexts/AppContext';
import MessageBubble from './MessageBubble';
import { FiSend, FiMessageCircle } from 'react-icons/fi';

const ChatInterface = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [isUserTyping, setIsUserTyping] = useState(false);
  const { messages, isTyping, sendMessage, documents } = useApp();
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle user typing indicator
  useEffect(() => {
    if (inputMessage.trim()) {
      setIsUserTyping(true);
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      typingTimeoutRef.current = setTimeout(() => {
        setIsUserTyping(false);
      }, 1000);
    } else {
      setIsUserTyping(false);
    }

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [inputMessage]);

  const handleSend = () => {
    if (inputMessage.trim()) {
      sendMessage(inputMessage);
      setInputMessage('');
      setIsUserTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg h-full flex flex-col min-h-0">
      {/* Messages Container - Fixed height with proper scrolling */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 min-h-0 overflow-y-auto"
      >
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 p-4">
            <FiMessageCircle className="w-16 h-16 mb-4 opacity-30" />
            <h3 className="text-lg font-medium mb-2 text-center">No messages yet</h3>
            <p className="text-sm text-center mb-4">
              {documents.length === 0 
                ? "Upload healthcare documents to start chatting" 
                : "Send a message to start chatting about your documents"}
            </p>
            <div className="text-xs text-center space-y-1">
              <p>Try asking questions like:</p>
              <p>"What medications are mentioned?"</p>
              <p>"Summarize the treatment plan"</p>
              <p>"Are there any allergies listed?"</p>
            </div>
          </div>
        ) : (
          <div className="p-4 space-y-3">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            
            {/* AI Typing Indicator */}
            {isTyping && (
              <div className="flex items-start space-x-2">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-healthcare-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            {/* User Typing Indicator */}
            {isUserTyping && (
              <div className="flex justify-end">
                <div className="bg-healthcare-primary text-white rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area - Fixed at bottom */}
      <div className="border-t border-gray-200 dark:border-gray-600 p-4 flex-shrink-0">
        <div className="flex space-x-2">
          <div className="flex-1 relative">
            <textarea
              value={inputMessage}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder={
                documents.length === 0 
                  ? "Upload documents first to start chatting..." 
                  : "Ask about medications, diagnoses, or treatment plans..."
              }
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-healthcare-primary
                       resize-none pr-12 text-sm"
              rows="1"
              maxLength="500"
              disabled={documents.length === 0}
            />
            {/* Typing indicator inside input */}
            {isUserTyping && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
                <div className="w-1.5 h-1.5 bg-healthcare-primary rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-healthcare-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1.5 h-1.5 bg-healthcare-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            )}
          </div>
          <button
            onClick={handleSend}
            disabled={!inputMessage.trim() || documents.length === 0}
            className="bg-healthcare-primary hover:bg-healthcare-secondary disabled:bg-gray-300 disabled:cursor-not-allowed
                     text-white rounded-lg p-3 transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-healthcare-secondary
                     flex items-center justify-center w-12 h-12"
            title={documents.length === 0 ? "Upload documents first" : "Send message"}
          >
            <FiSend className="w-4 h-4" />
          </button>
        </div>
        <div className="text-right text-xs text-gray-500 dark:text-gray-400 mt-1">
          {inputMessage.length}/500
          {documents.length === 0 && (
            <span className="text-orange-500 ml-2">• Upload documents to enable chat</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;