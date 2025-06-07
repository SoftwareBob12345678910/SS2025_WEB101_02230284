# Infinite Scroll Implementation with TanStack Query - Practical 5

## Overview
This practical implements infinite scrolling functionality in our TikTok application using TanStack Query (formerly React Query) with cursor-based pagination. The implementation provides a smooth, endless scrolling experience that efficiently handles large datasets.

## Technologies Used
- **TanStack Query (React Query)** - Data fetching and caching library
- **Intersection Observer API** - For detecting scroll position
- **Cursor-Based Pagination** - Efficient pagination strategy
- **Next.js** - React framework
- **Express.js** - Backend server
- **Prisma ORM** - Database operations

## Conceptual Foundation

### Pagination Strategies Comparison

#### Offset-Based Pagination
```javascript
// Traditional approach
GET /api/videos?page=3&limit=10
```
**Characteristics:**
- Uses page numbers and item limits
- Simple to implement and understand
- Performance degrades with large datasets
- Inconsistent results when data changes during pagination
- Can show duplicate items if new content is added

#### Cursor-Based Pagination
```javascript
// Modern approach
GET /api/videos?cursor=video_123&limit=10
```
**Characteristics:**
- Uses unique identifiers as reference points
- Consistent performance regardless of dataset size
- Maintains data consistency during real-time updates
- Ideal for infinite scroll interfaces
- No duplicate items when new content is added

### Why Cursor-Based for TikTok App?
1. **Smooth User Experience**: No jumping or duplicate content
2. **Real-Time Handling**: New videos added don't disrupt pagination
3. **Performance**: Efficient with potentially thousands of videos
4. **Scalability**: Works well as the platform grows

## Architecture Overview

### Backend Architecture
```
Video Controller
├── getAllVideos()          # Cursor-based video fetching
├── getFollowingVideos()    # Cursor-based following feed
└── Pagination Logic       # n+1 pattern for hasNextPage
```

### Frontend Architecture
```
TanStack Query Integration
├── QueryClientProvider     # Global query management
├── useInfiniteQuery        # Infinite scroll data fetching
├── Intersection Observer   # Scroll detection
└── VideoFeed Component     # UI implementation
```

## Implementation Details

### Part 1: Backend Implementation

#### Database Query Strategy
```javascript
// Prisma cursor-based query
const videos = await prisma.video.findMany({
  take: limit + 1,           // n+1 pattern
  cursor: cursor ? { id: cursor } : undefined,
  skip: cursor ? 1 : 0,      // Skip cursor item
  orderBy: { createdAt: 'desc' },
  include: {
    user: true,
    _count: { select: { likes: true, comments: true } }
  }
});
```

#### Response Format
```javascript
{
  videos: [...],             // Actual video data
  nextCursor: "video_456",   // Next page identifier
  hasNextPage: true          // More data available
}
```

### Part 2: Frontend Implementation

#### TanStack Query Configuration
```javascript
// Query client setup with optimal defaults
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,    // 5 minutes
      cacheTime: 10 * 60 * 1000,   // 10 minutes
      refetchOnWindowFocus: false,
    },
  },
});
```

#### Infinite Query Implementation
```javascript
const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  error
} = useInfiniteQuery({
  queryKey: ['videos', feedType],
  queryFn: ({ pageParam }) => videoService.getVideos(feedType, pageParam),
  getNextPageParam: (lastPage) => lastPage.nextCursor,
});
```

## Key Features Implemented

### ✅ Pagination System
- [x] Cursor-based pagination backend
- [x] TanStack Query infinite queries
- [x] Automatic next page parameter handling
- [x] Consistent data loading across sessions

### ✅ Scroll Detection
- [x] Intersection Observer API integration
- [x] Efficient scroll position tracking
- [x] Automatic loading trigger
- [x] Performance optimized detection

### ✅ User Experience
- [x] Smooth infinite scrolling
- [x] Loading states for new content
- [x] Error handling for failed requests
- [x] No duplicate content display
- [x] Preserved scroll position

### ✅ Data Management
- [x] Intelligent caching strategy
- [x] Background data fetching
- [x] Stale data revalidation
- [x] Memory efficient data handling

## Setup Instructions

### 1. Install Dependencies
```bash
npm install @tanstack/react-query @tanstack/react-query-devtools
```

### 2. Environment Setup
Ensure your backend supports cursor-based pagination endpoints:
```
GET /api/videos?cursor=<cursor>&limit=<limit>
GET /api/videos/following?cursor=<cursor>&limit=<limit>
```

### 3. Query Client Configuration
Add to your root layout (`src/app/layout.js`):
```javascript
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
```

## API Endpoints

### Video Feed Endpoints
```javascript
// Get videos with cursor pagination
GET /api/videos?cursor={cursor}&limit={limit}

// Get following feed with cursor pagination
GET /api/videos/following?cursor={cursor}&limit={limit}
```

### Response Format
```javascript
{
  "videos": [
    {
      "id": "video_123",
      "title": "Amazing Video",
      "url": "https://...",
      "user": { "id": "user_456", "name": "John Doe" },
      "_count": { "likes": 45, "comments": 12 }
    }
  ],
  "nextCursor": "video_789",
  "hasNextPage": true
}
```

## Component Implementation

### VideoFeed Component Structure
```javascript
export default function VideoFeed({ feedType = 'forYou' }) {
  // TanStack Query for infinite data
  const infiniteQuery = useInfiniteQuery({...});
  
  // Intersection observer for scroll detection
  const { ref: loadMoreRef } = useIntersectionObserver({
    onIntersect: () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }
  });

  // Flatten paginated data
  const videos = data?.pages.flatMap(page => page.videos) ?? [];

  return (
    <div>
      {videos.map(video => (
        <VideoCard key={video.id} video={video} />
      ))}
      
      {/* Loading trigger element */}
      <div ref={loadMoreRef}>
        {isFetchingNextPage && <LoadingSpinner />}
      </div>
    </div>
  );
}
```

### Intersection Observer Hook
```javascript
export function useIntersectionObserver({ onIntersect, threshold = 0.1 }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [onIntersect, threshold]);

  return { ref };
}
```

## Performance Optimizations

### Backend Optimizations
- **Database Indexing**: Proper indexes on cursor fields
- **Query Efficiency**: n+1 pattern to determine hasNextPage
- **Response Size**: Limit included relations to essential data
- **Connection Pooling**: Efficient database connection management

### Frontend Optimizations
- **Data Caching**: Intelligent cache management with TanStack Query
- **Memory Management**: Automatic garbage collection of old pages
- **Render Optimization**: React.memo for VideoCard components
- **Image Lazy Loading**: Videos load only when needed

### Caching Strategy
```javascript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,      // Data fresh for 5 minutes
      cacheTime: 10 * 60 * 1000,     // Cache persists for 10 minutes
      refetchOnWindowFocus: false,    // Don't refetch on tab focus
      retry: 3,                       // Retry failed requests 3 times
    },
  },
});
```

## Error Handling

### Network Error Handling
```javascript
const { error, isError } = useInfiniteQuery({
  queryKey: ['videos'],
  queryFn: fetchVideos,
  retry: (failureCount, error) => {
    // Don't retry on 4xx errors
    if (error.response?.status >= 400 && error.response?.status < 500) {
      return false;
    }
    return failureCount < 3;
  },
});

if (isError) {
  return <ErrorBoundary error={error} onRetry={refetch} />;
}
```

### Loading States
```javascript
// Different loading states for better UX
if (isLoading) return <InitialLoadingSkeleton />;
if (isFetchingNextPage) return <LoadMoreSpinner />;
if (hasNextPage) return <EndOfFeedMessage />;
```

## Testing Guidelines

### 1. Pagination Testing
- Test initial load with empty database
- Test loading subsequent pages
- Verify cursor consistency across requests
- Test behavior with rapid scrolling

### 2. Performance Testing
- Monitor memory usage during extended scrolling
- Test with large datasets (1000+ videos)
- Verify scroll performance on mobile devices
- Check network request efficiency

### 3. Edge Case Testing
- Test with no data available
- Test network failure scenarios
- Test concurrent user interactions
- Verify behavior during real-time updates

## Browser Compatibility

- **Modern Browsers**: Full support with Intersection Observer API
- **Safari**: Requires Intersection Observer polyfill for older versions
- **Mobile Browsers**: Optimized for touch scrolling
- **Progressive Enhancement**: Fallback to manual "Load More" button

## Security Considerations

- **Rate Limiting**: Backend implements request rate limiting
- **Input Validation**: Cursor parameters validated on server
- **Authentication**: Protected endpoints require valid tokens
- **Data Sanitization**: All response data properly sanitized

## Monitoring and Analytics

### Performance Metrics
- Page load times for subsequent pages
- Memory usage during extended sessions
- Network request efficiency
- User engagement with infinite scroll

### Query Metrics
```javascript
// TanStack Query DevTools provides:
// - Cache hit/miss ratios
// - Query execution times
// - Background refetch frequency
// - Error rates and retry attempts
```

## Reference Repositories
- **Frontend Code**: https://github.com/syangche/TikTok_Frontend.git
- **Backend Code**: https://github.com/syangche/TikTok_Server.git

## Additional Resources
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [useInfiniteQuery Guide](https://tanstack.com/query/latest/docs/react/guides/infinite-queries)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Prisma Cursor-Based Pagination](https://www.prisma.io/docs/concepts/components/prisma-client/pagination)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)