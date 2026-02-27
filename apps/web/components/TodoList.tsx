import React, { useState } from 'react';
import { useCategories } from '../../../packages/core/hooks/useCategories';
import { useTasks } from '../../../packages/core/hooks/useTasks';
import { CheckCircle, Circle, Plus, Trash2 } from 'lucide-react';

export default function TodoList({ onGoBack }: { onGoBack: () => void }) {
  const { tasks, isLoading: tasksLoading, addTask, updateTask, deleteTask } = useTasks();
  const { categories, isLoading: categoriesLoading } = useCategories();
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('1');

  if (tasksLoading || categoriesLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-950 flex items-center justify-center text-zinc-900 dark:text-white transition-colors duration-300">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    
    addTask({
      title: newTaskTitle,
      completed: false,
      categoryId: selectedCategoryId,
    });
    setNewTaskTitle('');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 font-sans p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white">My Tasks</h1>
          <button 
            onClick={onGoBack}
            className="text-sm text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition"
          >
            ← Back to Landing
          </button>
        </div>

        {/* Add Task Form */}
        <form onSubmit={handleAddTask} className="mb-10 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-4 rounded-2xl flex flex-col md:flex-row gap-4 transition-colors duration-300">
          <input
            type="text"
            placeholder="What needs to be done?"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-lg text-black dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-600 px-2"
          />
          <div className="flex gap-2">
            <select
              value={selectedCategoryId}
              onChange={(e) => setSelectedCategoryId(e.target.value)}
              className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-black dark:text-white rounded-xl px-4 py-2 text-sm outline-none cursor-pointer transition-colors duration-300"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
            <button 
              type="submit"
              disabled={!newTaskTitle.trim()}
              className="bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-xl font-medium flex items-center gap-2 transition"
            >
              <Plus size={18} />
              <span className="hidden sm:inline">Add</span>
            </button>
          </div>
        </form>

        {/* Categories Filter (Visual only for now, could be functional) */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          <div className="px-4 py-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm font-medium whitespace-nowrap transition-colors duration-300">
            All Tasks
          </div>
          {categories.map(cat => (
            <div key={cat.id} className="px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400 whitespace-nowrap flex items-center gap-2 transition-colors duration-300">
              <span className={`w-2 h-2 rounded-full ${cat.color}`}></span>
              {cat.name}
            </div>
          ))}
        </div>

        {/* Task List */}
        <div className="space-y-3">
          {tasks.length === 0 ? (
            <div className="text-center py-12 text-zinc-500">
              No tasks yet. Add one above!
            </div>
          ) : (
            tasks.map(task => {
              const category = categories.find(c => c.id === task.categoryId);
              return (
                <div 
                  key={task.id} 
                  className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                    task.completed 
                      ? 'bg-zinc-50 dark:bg-zinc-900/30 border-zinc-100 dark:border-zinc-800/50 opacity-60' 
                      : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <button 
                      onClick={() => updateTask({ id: task.id, updates: { completed: !task.completed } })}
                      className="text-zinc-400 hover:text-emerald-500 transition-colors focus:outline-none"
                    >
                      {task.completed ? <CheckCircle className="text-emerald-500" /> : <Circle />}
                    </button>
                    <div className="flex flex-col">
                      <span className={`text-lg transition-all ${task.completed ? 'line-through text-zinc-400 dark:text-zinc-500' : 'text-zinc-800 dark:text-zinc-200'}`}>
                        {task.title}
                      </span>
                      {category && (
                        <span className="text-xs text-zinc-500 flex items-center gap-1.5 mt-1">
                          <span className={`w-1.5 h-1.5 rounded-full ${category.color}`}></span>
                          {category.name}
                        </span>
                      )}
                    </div>
                  </div>
                  <button 
                    onClick={() => deleteTask(task.id)}
                    className="text-zinc-400 dark:text-zinc-600 hover:text-red-500 dark:hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all focus:outline-none p-2"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
