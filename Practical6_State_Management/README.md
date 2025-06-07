# Todo List Application with Zustand

## Overview
A simple Todo List application built with React and Zustand for state management. This project demonstrates how Zustand simplifies state management compared to prop drilling or complex Context setups.

## Technologies Used
- React (with Vite)
- Zustand (State Management)
- JavaScript/JSX
- CSS
- LocalStorage (for persistence)

## Project Setup

### Prerequisites
- Node.js installed on your system
- npm or yarn package manager

### Installation Steps

1. **Create a new React project**
   ```bash
   npx create vite@latest todo-zustand
   cd todo-zustand
   ```

2. **Install Zustand**
   ```bash
   npm install zustand
   ```

3. **Set up the project structure**
   ```
   src/
   ├── components/
   │   ├── TodoInput.jsx
   │   ├── TodoItem.jsx
   │   └── TodoList.jsx
   ├── store/
   │   └── todoStore.js
   ├── App.js
   └── index.js
   ```

## Features Implemented

### Core Functionality
- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete individual todos
- ✅ Clear all completed todos
- ✅ Persistent storage using localStorage

### State Management Features
- Centralized state management with Zustand
- Minimal boilerplate code
- Automatic re-rendering of components
- State persistence across page refreshes

## Component Architecture

### 1. TodoStore (src/store/todoStore.js)
**Purpose**: Central state management store
**Key Features**:
- State: `todos` array
- Actions: `addTodo`, `toggleTodo`, `removeTodo`, `clearCompleted`
- Persistence middleware for localStorage integration

### 2. TodoInput (src/components/TodoInput.jsx)
**Purpose**: Input component for adding new todos
**Features**:
- Text input field
- Add button functionality
- Form submission handling

### 3. TodoItem (src/components/TodoItem.jsx)
**Purpose**: Individual todo item display and interaction
**Features**:
- Toggle completion status
- Delete individual todo
- Visual feedback for completed items

### 4. TodoList (src/components/TodoList.jsx)
**Purpose**: Display all todos and bulk operations
**Features**:
- Render all todo items
- Clear completed todos functionality
- Empty state handling

### 5. App (src/App.js)
**Purpose**: Main application component
**Features**:
- Application layout
- Component composition
- Global styling

## Zustand Implementation Details

### Store Creation
```javascript
const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      // Actions implementation
    }),
    {
      name: 'todo-storage',
    }
  )
)
```

### State Access Pattern
```javascript
// Accessing specific state
const todos = useTodoStore(state => state.todos)

// Accessing actions
const { addTodo, toggleTodo } = useTodoStore()
```

### State Update Pattern
```javascript
// Immutable state updates
set((state) => ({
  todos: [...state.todos, newTodo]
}))
```

## How to Run the Application

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The application will be running locally

3. **Build for production**
   ```bash
   npm run build
   ```

## Usage Instructions

1. **Adding a Todo**
   - Type your todo text in the input field
   - Click "Add Todo" button or press Enter
   - Todo will appear in the list below

2. **Completing a Todo**
   - Click the checkbox next to any todo item
   - Completed todos will be visually distinguished

3. **Deleting a Todo**
   - Click the "Delete" button next to any todo item
   - Todo will be removed from the list

4. **Clearing Completed Todos**
   - Click "Clear Completed" button
   - All completed todos will be removed at once

## Key Learning Outcomes

### Zustand Benefits Demonstrated
- **Simplicity**: Minimal setup compared to Redux or Context API
- **Performance**: Components only re-render when subscribed state changes
- **Flexibility**: Easy to add new actions and state properties
- **Developer Experience**: Less boilerplate, more readable code

### State Management Concepts
- Centralized state management
- Immutable state updates
- Component-store interaction patterns
- State persistence strategies

## File Structure Explained

```
todo-zustand/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── TodoInput.jsx   # Input form component
│   │   ├── TodoItem.jsx    # Individual todo item
│   │   └── TodoList.jsx    # List container component
│   ├── store/              # State management
│   │   └── todoStore.js    # Zustand store configuration
│   ├── App.js              # Main application component
│   └── index.js            # Application entry point
├── package.json            # Project dependencies
└── README.md              # Project documentation
```

## Additional Notes

- The application uses Vite for fast development and building
- State persists across browser sessions using localStorage
- All components are functional components using React hooks
- The store pattern follows Zustand best practices
- Code is organized for maintainability and scalability

## Future Enhancements

Potential improvements that could be added:
- Todo categories/tags
- Due dates for todos
- Search and filter functionality
- Drag and drop reordering
- Multiple todo lists
- Export/import functionality