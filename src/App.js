import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Todos from './components/Todos'
import Todo from './components/Todo'

function App() {
  
  return (
    <div className="App">
      <h2>Todo List</h2>
      <Router>
        <Routes>
          <Route path='/' element={<Todos />}/>
          <Route path='/:id' element={<Todo />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
