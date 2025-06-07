# Data Visualization Dashboard with React

## Overview
An analytics dashboard application built with React that implements various charting libraries to display data for analytics. This project demonstrates how to create interactive, responsive charts using different visualization libraries and optimize them for performance.

## Technologies Used
- React
- Recharts (for Line and Pie charts)
- react-chartjs-2 & Chart.js (for Bar and Area charts)
- JavaScript/JSX
- CSS
- Responsive Design

## Project Setup

### Prerequisites
- Node.js installed on your system
- npm or yarn package manager
- Git for repository cloning

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/syangche/Data-Visualisation.git
   cd Data-Visualisation
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The dashboard will be running locally

## Features Implemented

### Chart Components Created
- ✅ Monthly Sales Chart (Line Chart - Recharts)
- ✅ Product Category Chart (Pie Chart - Recharts)
- ✅ Customer Acquisition Chart (Bar Chart - react-chartjs-2)
- ✅ Weekly Visitors Chart (Area Chart - react-chartjs-2)

### Dashboard Features
- ✅ Responsive design across all screen sizes
- ✅ Interactive chart elements
- ✅ Multiple charting libraries integration
- ✅ Data transformation and processing
- ✅ Performance optimized rendering

## Component Architecture

### 1. MonthlySalesChart.jsx
**Purpose**: Display monthly sales data trends using a line chart
**Library**: Recharts
**Features**:
- Time-series data visualization
- Interactive tooltips showing exact values
- Responsive width and height
- Custom styling and colors
- Grid lines for better readability

**Key Implementation**:
```jsx
<LineChart width={800} height={300} data={salesData}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="month" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="sales" stroke="#8884d8" />
</LineChart>
```

### 2. ProductCategoryChart.jsx
**Purpose**: Show product category distribution using a pie chart
**Library**: Recharts
**Features**:
- Percentage-based data visualization
- Color-coded segments
- Interactive legend
- Hover effects
- Custom labels showing percentages

**Key Implementation**:
```jsx
<PieChart width={400} height={400}>
  <Pie
    data={categoryData}
    cx={200}
    cy={200}
    labelLine={false}
    label={renderCustomizedLabel}
    outerRadius={80}
    fill="#8884d8"
    dataKey="value"
  />
  <Tooltip />
</PieChart>
```

### 3. CustomerAcquisitionChart.jsx
**Purpose**: Display customer acquisition metrics using a bar chart
**Library**: react-chartjs-2 with Chart.js
**Features**:
- Categorical data comparison
- Custom color schemes
- Animated transitions
- Responsive scaling
- Detailed tooltips

**Key Implementation**:
```jsx
<Bar
  data={chartData}
  options={{
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Customer Acquisition' }
    }
  }}
/>
```

### 4. WeeklyVisitorsChart.jsx
**Purpose**: Show weekly visitor trends using an area chart
**Library**: react-chartjs-2 with Chart.js
**Features**:
- Filled area visualization
- Gradient backgrounds
- Time-based x-axis
- Smooth curve interpolation
- Interactive data points

**Key Implementation**:
```jsx
<Line
  data={chartData}
  options={{
    responsive: true,
    plugins: {
      filler: { propagate: false }
    },
    elements: {
      point: { radius: 0 }
    }
  }}
/>
```

## Data Structure and Management

### Sample Data Formats

#### Monthly Sales Data
```javascript
const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  // ... more data
];
```

#### Product Category Data
```javascript
const categoryData = [
  { name: 'Electronics', value: 400 },
  { name: 'Clothing', value: 300 },
  { name: 'Books', value: 200 },
  // ... more categories
];
```

#### Customer Acquisition Data
```javascript
const acquisitionData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [{
    label: 'New Customers',
    data: [65, 59, 80, 81],
    backgroundColor: 'rgba(75, 192, 192, 0.2)'
  }]
};
```

## Charting Libraries Comparison

### Recharts
**Pros**:
- Built specifically for React
- Declarative approach
- Excellent TypeScript support
- Lightweight and performant
- Easy to customize

**Best for**: Line charts, Pie charts, simple visualizations

### react-chartjs-2 + Chart.js
**Pros**:
- Extensive chart types
- Highly customizable
- Great animation capabilities
- Large community support
- Advanced features

**Best for**: Complex visualizations, Bar charts, Area charts

## File Structure

```
data-visualization-dashboard/
├── src/
│   ├── components/
│   │   ├── MonthlySalesChart.jsx      # Line chart component
│   │   ├── ProductCategoryChart.jsx   # Pie chart component
│   │   ├── CustomerAcquisitionChart.jsx # Bar chart component
│   │   └── WeeklyVisitorsChart.jsx    # Area chart component
│   ├── data/
│   │   └── mockData.js               # Sample data for charts
│   ├── styles/
│   │   └── Dashboard.css             # Dashboard styling
│   ├── App.jsx                       # Main application component
│   └── index.js                      # Application entry point
├── package.json                      # Project dependencies
└── public/
    └── index.html                    # HTML template
```

## Dashboard Layout

### App.jsx Structure
```jsx
function App() {
  return (
    <div className="dashboard">
      <header>
        <h1>Analytics Dashboard</h1>
      </header>
      <main className="dashboard-grid">
        <div className="chart-container">
          <MonthlySalesChart />
        </div>
        <div className="chart-container">
          <ProductCategoryChart />
        </div>
        <div className="chart-container">
          <CustomerAcquisitionChart />
        </div>
        <div className="chart-container">
          <WeeklyVisitorsChart />
        </div>
      </main>
    </div>
  );
}
```

## Performance Optimizations

### 1. Component Memoization
- Used React.memo for chart components
- Prevented unnecessary re-renders
- Optimized data processing

### 2. Data Transformation
- Processed data outside of render cycles
- Used useMemo for expensive calculations
- Implemented efficient data structures

### 3. Lazy Loading
- Implemented code splitting for chart libraries
- Reduced initial bundle size
- Improved loading performance

### 4. Responsive Design
- Used CSS Grid and Flexbox
- Implemented media queries
- Ensured charts adapt to screen sizes

## Responsive Design Features

### CSS Grid Implementation
```css
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  padding: 20px;
}

@media (max-width: 768px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
```

### Chart Responsiveness
- All charts automatically adjust to container size
- Maintained aspect ratios across devices
- Optimized touch interactions for mobile

## Interactive Features

### Chart Interactions
- **Hover Effects**: Display detailed information on hover
- **Click Events**: Navigate to detailed views
- **Zoom Capabilities**: Zoom in/out on data ranges
- **Legend Interactions**: Toggle data series visibility

### User Experience Enhancements
- Loading states for data fetching
- Error boundaries for graceful error handling
- Smooth animations and transitions
- Accessible keyboard navigation

## Usage Instructions

### Viewing the Dashboard
1. Open the application in your browser
2. The dashboard displays four different chart types
3. Interact with charts by hovering over data points
4. Click on legend items to toggle data visibility

### Customizing Charts
1. Modify data in the respective component files
2. Update styling in component CSS or inline styles
3. Add new chart types by creating new components
4. Extend functionality with additional libraries

## Key Learning Outcomes

### Technical Skills Developed
- **Multiple Library Integration**: Working with different charting libraries
- **Data Visualization Principles**: Choosing appropriate chart types
- **React Performance**: Optimizing component rendering
- **Responsive Design**: Creating adaptive layouts

### Chart Selection Criteria
- **Line Charts**: Time-series data and trends
- **Pie Charts**: Categorical data distribution
- **Bar Charts**: Comparing quantities across categories
- **Area Charts**: Showing cumulative values over time

## Future Enhancements

### Potential Improvements
- Real-time data integration with APIs
- Export functionality (PDF, PNG, CSV)
- Advanced filtering and date range selection
- More chart types (scatter plots, heatmaps)
- Dashboard customization options
- User authentication and personalization

### Advanced Features
- Real-time updates with WebSocket connections
- Data drill-down capabilities
- Custom chart builder interface
- Advanced analytics and insights
- Integration with business intelligence tools

## Troubleshooting

### Common Issues
1. **Charts not rendering**: Check if required dependencies are installed
2. **Responsive issues**: Verify CSS grid and media queries
3. **Data not displaying**: Validate data format and structure
4. **Performance problems**: Implement React.memo and useMemo

### Dependencies Required
```json
{
  "recharts": "^2.x.x",
  "react-chartjs-2": "^4.x.x",
  "chart.js": "^3.x.x",
  "react": "^18.x.x"
}
```

This project successfully demonstrates the implementation of a comprehensive data visualization dashboard using modern React practices and multiple charting libraries.