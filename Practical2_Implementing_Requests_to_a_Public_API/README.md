# RESTful API Weather Application - Practical 2

## Overview
This project is a RESTful API Weather Application that demonstrates the implementation of all four HTTP methods (GET, POST, PUT, DELETE) using JavaScript and public APIs. The application allows users to fetch weather data, save locations, and manage saved locations with full CRUD operations.

## Technologies Used
- **HTML5** - Structure and user interface
- **CSS3** - Styling and responsive design
- **Vanilla JavaScript** - API interactions and DOM manipulation
- **OpenWeatherMap API** - Weather data retrieval (GET requests)
- **JSONPlaceholder API** - Mock backend for location management (POST, PUT, DELETE)
- **Fetch API** - Modern browser API for HTTP requests

## Project Structure
```
weather-api-app/
├── index.html          # Main HTML structure and UI
├── script.js           # JavaScript functionality and API calls
└── README.md           # Project documentation
```

## Features Implemented

### 1. GET Request - Weather Data Retrieval
- ✅ **Weather Lookup**: Fetch current weather data for any city
- ✅ **API Integration**: OpenWeatherMap API integration
- ✅ **Data Display**: Temperature, humidity, weather conditions, and description
- ✅ **Error Handling**: Proper error messages for invalid cities or API failures

### 2. POST Request - Save New Locations
- ✅ **Location Form**: Form to add new favorite locations
- ✅ **Data Validation**: Client-side validation for required fields
- ✅ **API Submission**: Send location data to JSONPlaceholder API
- ✅ **Success Feedback**: Confirmation messages for successful saves

### 3. PUT Request - Update Existing Locations
- ✅ **Edit Functionality**: Modal form for editing saved locations
- ✅ **Data Pre-population**: Existing data loaded into edit form
- ✅ **Update API Call**: PUT request to modify existing location data
- ✅ **UI Updates**: Real-time updates to the saved locations list

### 4. DELETE Request - Remove Locations
- ✅ **Delete Buttons**: Individual delete buttons for each saved location
- ✅ **Confirmation**: User confirmation before deletion
- ✅ **API Deletion**: DELETE request to remove location from server
- ✅ **UI Removal**: Immediate removal from the display list

## Installation and Setup

### Step 1: Project Setup
```bash
# Create project directory
mkdir weather-api-app
cd weather-api-app

# Create project files
touch index.html script.js
```

### Step 2: API Key Configuration
1. **OpenWeatherMap API Key**:
   - Sign up at [openweathermap.org](https://openweathermap.org/api)
   - Get your free API key
   - Replace `YOUR_OPENWEATHERMAP_API_KEY` in `script.js` with your actual key

```javascript
const API_KEY = 'your_actual_api_key_here';
```

### Step 3: File Structure
Create the following files with the provided code:

#### index.html
- Main HTML structure with tabbed interface
- Forms for weather lookup and location management
- Display areas for API responses
- Modal for location editing
- Embedded CSS styling

#### script.js
- Event listeners for user interactions
- API call functions for all HTTP methods
- Data processing and display logic
- Error handling and user feedback

## Application Interface

### Tab Navigation System
The application features a clean tabbed interface with four main sections:

1. **Weather Tab (GET)**: 
   - City name input field
   - Weather information display
   - Temperature, humidity, and conditions

2. **Save Location Tab (POST)**:
   - Location name input
   - City and country selection
   - Notes field for additional information
   - Save button with confirmation

3. **Saved Locations Tab (PUT/DELETE)**:
   - List of all saved locations
   - Edit and Delete buttons for each location
   - Real-time updates after modifications

4. **API Info Tab**:
   - Information about the APIs used
   - Usage statistics and response times

### Key Features

#### Weather Display
```javascript
// Weather data structure displayed:
{
  temperature: "25°C",
  humidity: "60%",
  description: "Clear sky",
  conditions: "Sunny"
}
```

#### Location Management
```javascript
// Location data structure:
{
  id: 1,
  name: "Home",
  city: "London",
  country: "UK",
  notes: "My hometown"
}
```

## API Endpoints Used

### 1. OpenWeatherMap API (GET)
```javascript
// Endpoint
https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric

// Response format
{
  "main": {
    "temp": 25.6,
    "humidity": 60
  },
  "weather": [{
    "main": "Clear",
    "description": "clear sky"
  }]
}
```

### 2. JSONPlaceholder API (POST, PUT, DELETE)
```javascript
// Base URL
https://jsonplaceholder.typicode.com/posts

// POST - Create new location
// PUT - Update existing location  
// DELETE - Remove location
```

## Functions Implemented

### Core API Functions

#### 1. GET Request - Fetch Weather
```javascript
async function getWeather(city) {
  // Fetches weather data from OpenWeatherMap API
  // Handles API errors and invalid city names
  // Updates UI with weather information
}
```

#### 2. POST Request - Save Location
```javascript
async function saveLocation(locationData) {
  // Sends new location data to JSONPlaceholder API
  // Validates form data before submission
  // Provides user feedback on success/failure
}
```

#### 3. PUT Request - Update Location
```javascript
async function updateLocation(id, locationData) {
  // Updates existing location via PUT request
  // Handles data validation and error responses
  // Updates UI with modified information
}
```

#### 4. DELETE Request - Remove Location
```javascript
async function deleteLocation(id) {
  // Removes location via DELETE request
  // Includes user confirmation dialog
  // Updates UI after successful deletion
}
```

### Utility Functions

#### Error Handling
```javascript
function handleApiError(error, operation) {
  // Centralized error handling for all API operations
  // User-friendly error messages
  // Console logging for debugging
}
```

#### UI Management
```javascript
function updateLocationsList() {
  // Refreshes the saved locations display
  // Handles empty states
  // Manages edit/delete button events
}
```

## Usage Instructions

### 1. Getting Weather Data
1. Navigate to the "Weather" tab
2. Enter a city name in the input field
3. Click "Get Weather" button
4. View the weather information displayed below

### 2. Saving New Locations
1. Go to the "Save Location" tab
2. Fill in all required fields:
   - Location name
   - City name
   - Country
   - Optional notes
3. Click "Save Location"
4. Check for success message

### 3. Managing Saved Locations
1. Visit the "Saved Locations" tab
2. View all previously saved locations
3. **To Edit**: Click "Edit" button, modify data in modal, click "Update"
4. **To Delete**: Click "Delete" button, confirm in dialog

### 4. Viewing API Information
1. Click on the "API Info" tab
2. View details about the APIs being used
3. Check response times and usage statistics

## Error Handling

The application includes comprehensive error handling:

- **Network Errors**: Connection timeout and server unavailability
- **API Errors**: Invalid API keys, rate limiting, invalid city names
- **Validation Errors**: Missing required fields, invalid data formats
- **User Feedback**: Clear error messages and success confirmations

## Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

*Requires modern browser with Fetch API support*

## Testing Checklist

### GET Request Testing
- [ ] Valid city name returns weather data
- [ ] Invalid city name shows error message
- [ ] API key validation works correctly
- [ ] Network error handling functions properly

### POST Request Testing
- [ ] Complete form submission creates new location
- [ ] Form validation prevents empty submissions
- [ ] Success message appears after saving
- [ ] API response is handled correctly

### PUT Request Testing
- [ ] Edit modal loads with existing data
- [ ] Form updates save changes correctly
- [ ] UI reflects changes immediately
- [ ] Error handling works for failed updates

### DELETE Request Testing
- [ ] Confirmation dialog appears before deletion
- [ ] Successful deletion removes item from UI
- [ ] Cancelled deletion preserves the item
- [ ] API error handling prevents UI issues

## Future Enhancements

- **Local Storage**: Persist saved locations across browser sessions
- **Geolocation**: Automatic weather for user's current location
- **Weather Forecast**: 5-day weather forecast display
- **Location Search**: Autocomplete for city names
- **Offline Mode**: Service worker for offline functionality
- **Data Visualization**: Charts for weather trends
- **Unit Conversion**: Celsius/Fahrenheit toggle
- **Multiple Cities**: Compare weather across multiple cities

## Security Considerations

- API key should be stored securely (not exposed in client-side code)
- Input validation to prevent XSS attacks
- Rate limiting awareness for API calls
- HTTPS usage for all API communications

## References

- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [JSONPlaceholder API Guide](https://jsonplaceholder.typicode.com/)
- [Fetch API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [RESTful API Design Principles](https://restfulapi.net/)
- [JavaScript Async/Await Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)