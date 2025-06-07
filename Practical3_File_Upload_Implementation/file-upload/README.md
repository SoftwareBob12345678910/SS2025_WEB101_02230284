# File Upload Implementation - Practical 3

## Objective
Create a React application with a file upload form that includes:
- Multipart form data handling
- File type and size validation
- Upload progress tracking
- Drag and drop interface

## Technologies Used
- **Next.js** - React framework for building the application
- **React Hook Form** - For form handling and validation
- **Formidable** - For parsing multipart form data on the server
- **Axios** - For HTTP requests with upload progress tracking
- **React Dropzone** - For drag and drop file interface

## Project Setup

### 1. Initialize Project
```bash
npx create-next-app file-upload
cd file-upload
```

### 2. Install Dependencies
```bash
npm install react-hook-form formidable axios react-dropzone
```

## Project Structure
```
file-upload/
├── pages/
│   ├── index.js          # Main upload form component
│   └── api/
│       └── upload.js     # API route for file upload
├── public/
├── styles/
└── package.json
```

## Implementation Details

### Part 1: Basic File Upload Form (`pages/index.js`)

The main component implements:
- **React Hook Form Integration**: Uses `useForm` hook for form state management
- **File Input Handling**: Captures file selection with proper validation
- **Form Submission**: Sends multipart form data to API endpoint

**Key Features:**
- File type validation (supports common formats like PDF, images, documents)
- File size validation (configurable maximum size limit)
- Form validation with error handling
- Clean, responsive UI design

### Part 2: API Route (`pages/api/upload.js`)

The server-side implementation includes:
- **Formidable Integration**: Parses incoming multipart form data
- **File Processing**: Handles uploaded files securely
- **Error Handling**: Comprehensive error responses
- **File Storage**: Saves files to designated upload directory

### Part 3: Enhanced Features

#### File Validation Implementation
```javascript
// Example validation rules
const validateFile = (file) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  const maxSize = 5 * 1024 * 1024; // 5MB
  
  if (!allowedTypes.includes(file.type)) {
    return 'File type not supported';
  }
  
  if (file.size > maxSize) {
    return 'File size exceeds 5MB limit';
  }
  
  return null;
};
```

#### Progress Tracking
- Real-time upload progress display
- Progress bar visualization
- Upload status feedback (uploading, success, error)

#### Drag and Drop Interface
- **React Dropzone Integration**: Provides intuitive drag-and-drop functionality
- **Visual Feedback**: Highlights drop zone during drag operations
- **Multiple File Support**: Allows selection of multiple files simultaneously
- **File Preview**: Shows selected files before upload

## Features Implemented

### ✅ Core Requirements
- [x] Multipart form data handling
- [x] File type validation
- [x] File size validation
- [x] Upload progress tracking
- [x] Drag and drop interface

### ✅ Additional Features
- [x] Multiple file upload support
- [x] File preview functionality
- [x] Responsive design
- [x] Error handling and user feedback
- [x] Clean and intuitive UI

## Usage Instructions

1. **Start the Development Server**
   ```bash
   npm run dev
   ```

2. **Access the Application**
   - Open browser and navigate to `http://localhost:3000`

3. **Upload Files**
   - **Method 1**: Click "Choose Files" button to select files
   - **Method 2**: Drag and drop files into the designated area
   - Files will be validated automatically
   - Upload progress will be displayed in real-time

4. **File Validation**
   - Supported formats: Images (JPEG, PNG), PDF, Documents
   - Maximum file size: 5MB per file
   - Validation errors will be displayed if files don't meet criteria

## API Endpoints

### POST `/api/upload`
Handles file upload with multipart form data

**Request:**
- Content-Type: `multipart/form-data`
- Body: File data

**Response:**
```json
{
  "success": true,
  "message": "File uploaded successfully",
  "filename": "uploaded_file.pdf"
}
```

## Configuration Options

### File Validation Settings
```javascript
const config = {
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: [
    'image/jpeg',
    'image/png', 
    'image/gif',
    'application/pdf',
    'text/plain'
  ],
  uploadDirectory: './uploads'
};
```

## Error Handling

The application includes comprehensive error handling for:
- Invalid file types
- File size exceeded
- Network errors
- Server errors
- Upload interruptions

## Security Considerations

- File type validation prevents malicious uploads
- File size limits prevent resource exhaustion
- Secure file naming prevents directory traversal
- Input sanitization for all form data

## Browser Compatibility

- Modern browsers with HTML5 File API support
- Drag and drop functionality requires modern browser
- Progressive enhancement for older browsers

## Reference Repository
Project codes and structure available at: https://github.com/syangche/React_Practicals.git