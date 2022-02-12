import logo from './logo.svg';
import './App.css';
import { Collection } from './components/collection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Collection 
          title="My Collection"
          count={10}
        />
      </header>
    </div>
  );
}

export default App;
