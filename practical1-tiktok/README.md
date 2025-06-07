# TikTok Web Application - Practical 1

## Overview
This project is a TikTok clone web application built using Next.js, React, and Tailwind CSS. The application includes user authentication, video feed interface, and basic navigation structure similar to TikTok's web version.

## Technologies Used
- **Next.js 14** - React framework with App Router
- **React 18** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Hook Form** - Form library for validation and state management
- **React Icons** - Icon library for UI components

## Project Structure
```
src/
├── app/
│   ├── explore/
│   ├── following/
│   ├── live/
│   ├── login/
│   ├── profile/
│   ├── signup/
│   ├── upload/
│   ├── layout.js
│   └── page.js
├── components/
│   ├── layout/
│   │   └── MainLayout.jsx
│   └── ui/
│       ├── VideoCard.jsx
│       └── VideoFeed.jsx
└── lib/
```

## Installation Instructions

### Step 1: Clone and Setup
```bash
# Navigate to your project directory
cd your-github-repo

# Create Next.js project
npx create-next-app@latest tiktok-clone
cd tiktok-clone
```

### Step 2: Project Configuration
When prompted during setup:
- **TypeScript**: No (Using JSX)
- **ESLint**: Yes
- **Tailwind CSS**: Yes
- **src/ directory**: Yes
- **App Router**: Yes
- **Import alias**: No

### Step 3: Install Dependencies
```bash
npm install react-icons react-hook-form
```

### Step 4: Clean Up Default Files
1. Replace `src/app/page.js` with basic component
2. Update `src/app/globals.css` to include only Tailwind directives:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 5: Create Directory Structure
```bash
mkdir -p src/components/layout
mkdir -p src/components/ui
mkdir -p src/lib
mkdir -p src/app/profile
mkdir -p src/app/upload
mkdir -p src/app/login
mkdir -p src/app/signup
mkdir -p src/app/following
mkdir -p src/app/explore
mkdir -p src/app/live
```

## Features Implemented

### Part 1: Basic Setup and Navigation
- ✅ Next.js project initialization with proper configuration
- ✅ Tailwind CSS integration for styling
- ✅ Basic project structure and organization
- ✅ Main layout component with navigation
- ✅ Route setup for different pages

### Part 2: Web Layout and Interface
- ✅ **Sidebar Navigation**: Implemented with Home, Following, Explore, Live, and Profile links
- ✅ **Video Feed Interface**: Created VideoCard and VideoFeed components
- ✅ **Main Content Area**: Responsive layout matching TikTok's web design
- ✅ **Multiple Pages**: 
  - Home page with video feed
  - Following page
  - Explore page
  - Live page
  - Upload page
  - Profile page

### Part 3: Authentication System
- ✅ **Login Form**: Complete with validation and error handling
- ✅ **Registration Form**: Includes password confirmation and terms acceptance
- ✅ **Form Validation**: 
  - Email format validation
  - Password strength requirements (minimum 8 characters)
  - Required field validation
  - Password confirmation matching
- ✅ **Loading States**: Visual feedback during form submission
- ✅ **Navigation Integration**: Login/Signup links in main layout

## Key Components

### MainLayout.jsx
Main application layout featuring:
- Left sidebar with navigation menu
- Header with search functionality
- Login/logout buttons
- User profile section
- Responsive design

### VideoCard.jsx
Individual video component displaying:
- Video placeholder
- User information
- Interaction buttons (like, comment, share)
- Video metadata

### VideoFeed.jsx
Feed container that:
- Renders multiple VideoCard components
- Manages video data
- Handles feed scrolling

### Authentication Pages
- **Login Page**: Email/password form with validation
- **Signup Page**: Registration form with confirmation fields

## Form Validation Features

### Login Form Validation
- **Email**: Required, valid email format
- **Password**: Required, minimum 8 characters

### Signup Form Validation
- **Username**: Required field
- **Email**: Required, valid email format using regex pattern
- **Password**: Required, minimum 8 characters
- **Confirm Password**: Must match original password
- **Terms & Conditions**: Required checkbox

### Validation Patterns Used
```javascript
// Email validation regex
/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// Password validation
minLength: 8, required: true
```

## Running the Application

### Development Server
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to view the application.

### Build for Production
```bash
npm run build
npm start
```

## API Integration Ready
The application is structured to easily integrate with backend APIs:
- Form submission handlers ready for API calls
- Authentication state management prepared
- Video data fetching structure in place

## Future Enhancements
- Backend API integration
- Real video upload and playback
- User authentication with JWT
- Database integration
- Real-time features (comments, likes)
- Mobile responsive improvements

## References
- [Next.js Documentation](https://nextjs.org/docs)
- [React.js Documentation](https://legacy.reactjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
