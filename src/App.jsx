import React, { useState, useEffect } from 'react';
import { Plus, Trash2, CheckCircle, Circle, ClipboardList } from 'lucide-react';

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center py-12 px-4">
      <header className="mb-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <ClipboardList className="w-10 h-10 text-blue-400" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            DevOps To-Do
          </h1>
        </div>
        <p className="text-slate-400">Aplicação para Aula de Containers e Azure</p>
      </header>

      <main className="w-full max-w-md">
        <form onSubmit={addTodo} className="flex gap-2 mb-8">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Adicione uma nova tarefa..."
            className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-lg transition-colors flex items-center justify-center"
          >
            <Plus className="w-6 h-6" />
          </button>
        </form>

        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-xl">
          <div className="p-4 border-b border-slate-700 flex justify-between items-center bg-slate-800/50">
            <span className="text-sm font-medium text-slate-400">
              Tarefas: {todos.length}
            </span>
            <span className="text-sm font-medium text-blue-400">
              Concluídas: {completedCount} de {todos.length}
            </span>
          </div>

          <ul className="divide-y divide-slate-700">
            {todos.length === 0 ? (
              <li className="p-12 text-center text-slate-500 italic">
                Nenhuma tarefa por aqui ainda...
              </li>
            ) : (
              todos.map(todo => (
                <li key={todo.id} className="p-4 flex items-center gap-3 group hover:bg-slate-700/30 transition-colors">
                  <button 
                    onClick={() => toggleTodo(todo.id)}
                    className="text-slate-500 hover:text-blue-400 transition-colors"
                  >
                    {todo.completed ? (
                      <CheckCircle className="w-6 h-6 text-emerald-500" />
                    ) : (
                      <Circle className="w-6 h-6" />
                    )}
                  </button>
                  <span className={`flex-1 text-lg ${todo.completed ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                    {todo.text}
                  </span>
                  <button 
                    onClick={() => deleteTodo(todo.id)}
                    className="text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </main>

      <footer className="mt-12 text-slate-500 text-sm">
        <p>Desenvolvido para fins educacionais &bull; Azure App Service &bull; Docker Hub</p>
      </footer>
    </div>
  );
}

export default App;
