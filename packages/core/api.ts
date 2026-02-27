import { db } from './database';
import { Category, Task, User } from './types';

// Simulate network latency
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  users: {
    get: async (): Promise<User[]> => {
      await delay(300);
      return db.getUsers();
    }
  },
  categories: {
    get: async (): Promise<Category[]> => {
      await delay(300);
      return db.getCategories();
    }
  },
  tasks: {
    get: async (): Promise<Task[]> => {
      await delay(500);
      return db.getTasks();
    },
    create: async (task: Omit<Task, 'id' | 'createdAt'>): Promise<Task> => {
      await delay(500);
      return db.addTask(task);
    },
    update: async (id: string, updates: Partial<Task>): Promise<Task> => {
      await delay(500);
      return db.updateTask(id, updates);
    },
    delete: async (id: string): Promise<boolean> => {
      await delay(500);
      return db.deleteTask(id);
    }
  }
};
