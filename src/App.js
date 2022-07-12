import logo from './logo.svg';
import './App.css';
import List from './List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id='title'>To-Do List</h1>
        <div id="to-do-list"><List /></div>
      </header>
    </div>
  );
}

export default App;
