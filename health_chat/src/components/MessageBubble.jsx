// // src/components/MessageBubble/MessageBubble.jsx
// import React, { useState } from 'react';
// import { FiUser, FiBot, FiChevronDown, FiChevronUp } from 'react-icons/fi';

// const MessageBubble = ({ message }) => {
//   const [expandedSources, setExpandedSources] = useState(false);
//   const isUser = message.type === 'user';

//   const formatTime = (timestamp) => {
//     return new Date(timestamp).toLocaleTimeString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   return (
//     <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} space-x-2`}>
//       {!isUser && (
//         <div className="w-8 h-8 bg-healthcare-primary rounded-full flex items-center justify-center flex-shrink-0">
//           <FiBot className="text-white text-sm" />
//         </div>
//       )}
      
//       <div className={`max-w-[70%] ${isUser ? 'order-first' : ''}`}>
//         <div className={`rounded-lg p-4 ${
//           isUser 
//             ? 'bg-healthcare-primary text-white rounded-br-none' 
//             : 'bg-gray-100 text-gray-800 rounded-bl-none'
//         }`}>
//           <p className="whitespace-pre-wrap">{message.content}</p>
//         </div>
        
//         {/* Sources */}
//         {message.sources && message.sources.length > 0 && (
//           <div className="mt-2">
//             <button
//               onClick={() => setExpandedSources(!expandedSources)}
//               className="flex items-center space-x-1 text-xs text-healthcare-primary hover:text-healthcare-secondary"
//             >
//               <span>Sources ({message.sources.length})</span>
//               {expandedSources ? <FiChevronUp size={12} /> : <FiChevronDown size={12} />}
//             </button>
            
//             {expandedSources && (
//               <div className="mt-2 space-y-1">
//                 {message.sources.map((source, index) => (
//                   <div key={index} className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
//                     {source}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
        
//         <div className={`text-xs text-gray-500 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
//           {formatTime(message.timestamp)}
//         </div>
//       </div>
      
//       {isUser && (
//         <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
//           <FiUser className="text-white text-sm" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default MessageBubble;









import React, { useState } from 'react';
import { FiUser, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';

const MessageBubble = ({ message }) => {
  const [expandedSources, setExpandedSources] = useState(false);
  const isUser = message.type === 'user';

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} space-x-2`}>
      {!isUser && (
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
          <FaRobot className="text-white text-sm" />
        </div>
      )}
      
      <div className={`max-w-[70%] ${isUser ? 'order-first' : ''}`}>
        <div className={`rounded-lg p-4 ${
          isUser 
            ? 'bg-blue-500 text-white rounded-br-none' 
            : 'bg-gray-100 text-gray-800 rounded-bl-none'
        }`}>
          <p className="whitespace-pre-wrap">{message.content}</p>
        </div>
        
        {message.sources && message.sources.length > 0 && (
          <div className="mt-2">
            <button
              onClick={() => setExpandedSources(!expandedSources)}
              className="flex items-center space-x-1 text-xs text-blue-500 hover:text-blue-600"
            >
              <span>Sources ({message.sources.length})</span>
              {expandedSources ? <FiChevronUp size={12} /> : <FiChevronDown size={12} />}
            </button>
            
            {expandedSources && (
              <div className="mt-2 space-y-1">
                {message.sources.map((source, index) => (
                  <div key={index} className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                    {source}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        
        <div className={`text-xs text-gray-500 mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
          {formatTime(message.timestamp)}
        </div>
      </div>
      
      {isUser && (
        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
          <FiUser className="text-white text-sm" />
        </div>
      )}
    </div>
  );
};

export default MessageBubble;