import React, {useState} from 'react';
import Header from './Components/Header';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';


const App = () => {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [value, setValue] = useState('')
  // const [searchTerm, setSearchTerm] = useState("");
  const filteredTodo = todos.filter (todos => {

    return todos.title.toLowerCase().includes(value.toLowerCase())
  })


  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header/>
        </div>
      <div>
      <div>
                <input className='searchInput' type='text' placeholder='Search...'
                           onChange={(event) => setValue(event.target.value)}
                           

                 />
            </div>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList todos={filteredTodo} 
          setTodos={setTodos}
           setEditTodo={setEditTodo} 
           />
        </div>
      </div>
    </div>
  );
};

export default App;