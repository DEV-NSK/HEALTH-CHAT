
// src/components/SearchBar/SearchBar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '/src/contexts/AppContext';
import { FiSearch, FiX } from 'react-icons/fi';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { searchMessages } = useApp();
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    if (query.trim()) {
      setIsTyping(true);
      // Clear previous timeout
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      // Set new timeout
      typingTimeoutRef.current = setTimeout(() => {
        setIsTyping(false);
        searchMessages(query);
      }, 600);
    } else {
      setIsTyping(false);
      searchMessages('');
    }

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [query, searchMessages]);

  const clearSearch = () => {
    setQuery('');
    searchMessages('');
  };

  return (
    <div className="relative mb-4">
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search messages and documents..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                   bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-healthcare-primary"
        />
        
        {/* Clear button */}
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <FiX className="w-4 h-4" />
          </button>
        )}
        
        {/* Typing indicator */}
        {isTyping && (
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex space-x-1">
            <div className="w-1.5 h-1.5 bg-healthcare-primary rounded-full animate-bounce"></div>
            <div className="w-1.5 h-1.5 bg-healthcare-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-1.5 h-1.5 bg-healthcare-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;