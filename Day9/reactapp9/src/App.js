import './App.css';
import store from './component/store';
import { Provider } from 'react-redux';
import { Counter } from './component/Counter';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counter/>
      </Provider>
    </div>
  );
}

export default App;