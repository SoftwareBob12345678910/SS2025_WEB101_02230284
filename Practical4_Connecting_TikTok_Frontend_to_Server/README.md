# TikTok Frontend to Backend Integration - Practical 4

## Overview
This practical focuses on connecting our Next.js frontend to the Express.js backend built in previous practicals. We implement user authentication, video display, and social interactions including following users and viewing personalized feeds.

## Technologies Used
- **Next.js** - React framework for frontend development
- **Express.js** - Backend server framework
- **Axios** - HTTP client for API requests
- **JWT (JSON Web Tokens)** - Authentication mechanism
- **React Context API** - State management for authentication
- **React Hook Form** - Form handling and validation
- **React Hot Toast** - User notifications
- **Prisma ORM** - Database operations

## Project Architecture

### Frontend Structure
```
src/
├── app/
│   ├── explore-users/
│   │   └── page.jsx          # User discovery page
│   ├── following/
│   │   └── page.jsx          # Following feed page
│   ├── profile/
│   │   └── [userId]/
│   │       └── page.jsx      # Dynamic user profile
│   ├── upload/
│   │   └── page.jsx          # Video upload page
│   └── layout.js             # Root layout with AuthProvider
├── components/
│   ├── auth/
│   │   ├── AuthForms.jsx     # Login/signup forms
│   │   └── AuthModal.jsx     # Authentication modal
│   ├── layout/
│   │   └── MainLayout.jsx    # Main app layout
│   └── ui/
│       ├── Modal.jsx         # Reusable modal component
│       ├── VideoCard.jsx     # Individual video display
│       └── VideoFeed.jsx     # Video feed container
├── contexts/
│   └── authContext.jsx       # Authentication context
├── lib/
│   └── api-config.js         # Axios configuration
└── services/
    ├── videoService.js       # Video-related API calls
    └── userService.js        # User-related API calls
```

## Implementation Details

### Part 1: API Configuration and Authentication

#### 1. API Client Setup
- **Axios Configuration**: Centralized HTTP client with automatic token attachment
- **Request Interceptors**: Automatically adds JWT tokens to requests
- **Error Handling**: Global error response handling and user notifications

#### 2. Authentication State Management
- **JWT-based Authentication**: Secure token-based user authentication
- **React Context**: Global authentication state management
- **Local Storage**: Secure token storage with automatic cleanup
- **Protected Routes**: Route guards for authenticated content

#### 3. Authentication User Interface
- **Modal System**: Reusable modal components for authentication flows
- **Form Validation**: Comprehensive input validation with error handling
- **User Feedback**: Toast notifications for success/error states

### Part 2: Video Feed Integration

#### 1. Real Data Fetching
- **API Integration**: Replace mock data with backend API calls
- **Loading States**: Proper loading indicators during data fetching
- **Error Handling**: Graceful error handling with user-friendly messages
- **Data Formatting**: Transform API responses for frontend consumption

#### 2. Video Interactions
- **Like/Unlike System**: Real-time video interaction functionality
- **Comment Interface**: Interactive commenting system
- **Video Controls**: Custom video playback controls with autoplay

### Part 3: User Discovery and Social Features

#### 1. User Search and Discovery
- **Explore Users Page**: Dedicated page for user discovery
- **Follow/Unfollow Buttons**: Interactive social connection controls
- **User Profiles**: Comprehensive user profile displays with video galleries

#### 2. Social Functionality
- **Follow System**: Complete follow/unfollow implementation
- **UI State Updates**: Real-time UI updates reflecting follow status
- **Error Handling**: Robust error handling for social interactions

#### 3. Personalized Feeds
- **Following Feed**: Curated content from followed users only
- **Empty States**: Elegant handling when no content is available
- **Feed Transitions**: Smooth navigation between global and following feeds

## Setup Instructions

### 1. Install Dependencies
```bash
npm install axios jwt-decode react-hot-toast
```

### 2. Environment Configuration
Create `.env.local` in project root:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

### 3. Backend Setup
Ensure your Express.js backend is running on port 8000 with the following endpoints:
- Authentication: `/auth/login`, `/auth/register`
- Videos: `/videos`, `/videos/following`
- Users: `/users`, `/users/follow`, `/users/unfollow`
- Interactions: `/videos/:id/like`, `/videos/:id/comment`

## Key Features Implemented

### ✅ Authentication System
- [x] User registration and login
- [x] JWT token management
- [x] Protected route authentication
- [x] Automatic token refresh
- [x] Secure logout functionality

### ✅ Video Management
- [x] Video feed with real backend data
- [x] Video upload functionality
- [x] Like/unlike interactions
- [x] Comment system
- [x] Video playback controls

### ✅ Social Features
- [x] User discovery and exploration
- [x] Follow/unfollow functionality
- [x] Personalized following feed
- [x] User profile pages
- [x] Social interaction tracking

### ✅ User Experience
- [x] Responsive design
- [x] Loading states and error handling
- [x] Toast notifications
- [x] Modal-based authentication
- [x] Smooth transitions and animations

## API Endpoints

### Authentication
```javascript
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
```

### Videos
```javascript
GET    /api/videos              # Get all videos (For You feed)
GET    /api/videos/following    # Get videos from followed users
POST   /api/videos              # Upload new video
POST   /api/videos/:id/like     # Like/unlike video
POST   /api/videos/:id/comment  # Add comment to video
```

### Users
```javascript
GET    /api/users               # Get all users for discovery
GET    /api/users/:id           # Get specific user profile
POST   /api/users/:id/follow    # Follow user
DELETE /api/users/:id/follow    # Unfollow user
GET    /api/users/:id/videos    # Get user's videos
```

## Component Architecture

### Authentication Flow
```javascript
// Context-based authentication management
const { user, login, logout, loading } = useAuth();

// Protected route example
if (loading) return <LoadingSpinner />;
if (!user) return <AuthModal />;
```

### Video Feed Implementation
```javascript
// Real-time video feed with backend integration
const [videos, setVideos] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchVideos().then(setVideos).finally(() => setLoading(false));
}, [feedType]);
```

### Social Interactions
```javascript
// Follow/unfollow with optimistic updates
const handleFollow = async (userId) => {
  setFollowing(true); // Optimistic update
  try {
    await followUser(userId);
  } catch (error) {
    setFollowing(false); // Revert on error
    toast.error('Failed to follow user');
  }
};
```

## Testing Guidelines

### 1. User Account Testing
- Create 2-3 different user accounts
- Test registration and login flows
- Verify authentication persistence

### 2. Video Functionality Testing
- Upload videos with different accounts
- Test video playback and controls
- Verify like/unlike functionality
- Test comment system

### 3. Social Features Testing
- Use one account to follow others
- Verify following feed shows correct content
- Test user discovery page
- Check profile page functionality

### 4. Authentication Flow Testing
- Test logout/login with different accounts
- Verify protected route access
- Test token expiration handling

## Security Considerations

- **JWT Token Security**: Tokens stored securely with automatic cleanup
- **Request Validation**: All API requests include proper authentication
- **CORS Configuration**: Proper cross-origin resource sharing setup
- **Input Sanitization**: All user inputs validated and sanitized
- **Protected Routes**: Authentication required for sensitive operations

## Performance Optimizations

- **Lazy Loading**: Components loaded on demand
- **API Caching**: Intelligent caching of API responses
- **Optimistic Updates**: UI updates before API confirmation
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for better load times

## Error Handling Strategy

- **Global Error Boundary**: Catches and handles React component errors
- **API Error Interceptors**: Centralized API error handling
- **User-Friendly Messages**: Clear error messages for users
- **Fallback UI**: Graceful degradation when features fail
- **Retry Mechanisms**: Automatic retry for failed requests

## Browser Compatibility

- Modern browsers with ES6+ support
- Mobile-responsive design
- Progressive Web App features
- Offline functionality for cached content

## Reference Repositories
- **Frontend Code**: https://github.com/syangche/TikTok_Frontend.git
- **Backend Code**: https://github.com/syangche/TikTok_Server.git

## Additional Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [React Hook Form](https://react-hook-form.com/)
- [Axios Documentation](https://axios-http.com/)
- [JWT Authentication Guide](https://jwt.io/introduction)
- [Express.js Documentation](https://expressjs.com/)
- [Prisma ORM Documentation](https://www.prisma.io/docs)