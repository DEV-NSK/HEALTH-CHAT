# Healthcare Document Chat Assistant

A React-based frontend application for uploading healthcare documents and having AI-powered conversations about their content.

## Features

### Core Features
- **Document Upload & Management**
  - Drag-and-drop file upload
  - Support for PDF, DOCX, and TXT files
  - File validation and progress tracking
  - Document list with metadata
  - File deletion capability

- **Chat Interface**
  - Real-time messaging interface
  - Message bubbles with user/system differentiation
  - Typing indicators and timestamps
  - Auto-scroll to latest messages
  - Message history persistence

- **Document Context**
  - Source citations with document excerpts
  - Highlighted matching text sections
  - Clickable source references

- **Healthcare-Specific UI**
  - Medical disclaimer with terms acceptance
  - Privacy and security indicators
  - Clear data handling information

### Technical Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Icons**: React Icons

## Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd healthcare-chat-frontend