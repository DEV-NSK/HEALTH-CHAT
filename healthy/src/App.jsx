// src/App.jsx
import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AppProvider } from "./contexts/AppContext";
import SearchBar from "./components/SearchBar";
import DocumentUpload from "./components/DocumentUpload";
import DocumentList from "./components/DocumentList";
import ChatInterface from "./components/ChatInterface";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/index.css";

function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <div className="h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 overflow-hidden">
          <div className="container mx-auto px-4 py-4 h-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-healthcare-primary dark:text-healthcare-secondary">
                Healthcare Document Assistant
              </h1>
              <ThemeToggle />
            </div>

            {/* Search Bar */}
            <SearchBar />

            {/* Main Content Grid - Fixed height */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[calc(100vh-140px)]">
              {/* Left Sidebar - Document Management */}
              <div className="lg:col-span-1 flex flex-col space-y-4 h-full">
                <div className="flex-1 min-h-0">
                  <DocumentUpload />
                </div>
                <div className="flex-1 min-h-0">
                  <DocumentList />
                </div>
              </div>

              {/* Right Side - Chat Interface */}
              <div className="lg:col-span-2 h-full flex flex-col min-h-0">
                <ChatInterface />
              </div>
            </div>
          </div>
        </div>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
