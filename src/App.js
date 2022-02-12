import './App.css';
import { Collection, CollectionList } from './components/collection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CollectionList 
          list={[
            {
              index: 0
            },
            {
              index: 1
            },
            {
              index: 2
            },
            {
              index: 3
            },
            {
              index: 4
            },
            {
              index: 5
            },
            {
              index: 6
            },
            {
              index: 7
            },
            {
              index: 8
            }
          ]}
        />
      </header>
    </div>
  );
}

export default App;
