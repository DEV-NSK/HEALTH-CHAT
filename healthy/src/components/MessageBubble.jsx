// src/components/MessageBubble/MessageBubble.jsx (Alternative with Feather Icons)
import React from 'react';
import { FiUser, FiMessageSquare } from 'react-icons/fi';

const MessageBubble = ({ message }) => {
  const isUser = message.type === 'user';
  const timestamp = new Date(message.timestamp).toLocaleTimeString();

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} space-x-2`}>
      {!isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-healthcare-primary rounded-full flex items-center justify-center">
            <FiMessageSquare className="w-4 h-4 text-white" />
          </div>
        </div>
      )}
      
      <div className={`max-w-[70%] ${isUser ? 'order-first' : ''}`}>
        <div className={`rounded-lg p-3 ${
          isUser 
            ? 'bg-healthcare-primary text-white rounded-br-none' 
            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-bl-none'
        }`}>
          <p className="text-sm">{message.content}</p>
        </div>
        
        {/* Sources */}
        {message.sources && message.sources.length > 0 && (
          <div className="mt-2 space-y-1">
            {message.sources.map((source, index) => (
              <div key={index} className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded px-2 py-1">
                📄 {source}
              </div>
            ))}
          </div>
        )}
        
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {timestamp}
        </div>
      </div>

      {isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
            <FiUser className="w-4 h-4 text-white" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;