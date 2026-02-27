import { Category, Task, User } from './types';

// In-memory database
let users: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com' }
];

let categories: Category[] = [
  { id: '1', name: 'Work', color: 'bg-blue-500' },
  { id: '2', name: 'Personal', color: 'bg-green-500' },
  { id: '3', name: 'Health', color: 'bg-red-500' }
];

let tasks: Task[] = [
  {
    id: '1',
    title: 'Finish the project architecture',
    description: 'Setup monorepo structure and TanStack Query',
    completed: true,
    categoryId: '1',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Buy groceries',
    description: 'Milk, Eggs, Bread',
    completed: false,
    categoryId: '2',
    createdAt: new Date().toISOString()
  }
];

// Private methods to manipulate the database
export const db = {
  getUsers: () => [...users],
  
  getCategories: () => [...categories],
  
  getTasks: () => [...tasks],
  
  addTask: (task: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...task,
      id: Math.random().toString(36).substring(2, 9),
      createdAt: new Date().toISOString()
    };
    tasks = [...tasks, newTask];
    return newTask;
  },
  
  updateTask: (id: string, updates: Partial<Task>) => {
    let updatedTask: Task | undefined;
    tasks = tasks.map(task => {
      if (task.id === id) {
        updatedTask = { ...task, ...updates };
        return updatedTask;
      }
      return task;
    });
    if (!updatedTask) throw new Error('Task not found');
    return updatedTask;
  },
  
  deleteTask: (id: string) => {
    const initialLength = tasks.length;
    tasks = tasks.filter(task => task.id !== id);
    if (tasks.length === initialLength) throw new Error('Task not found');
    return true;
  }
};
