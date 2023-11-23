import './App.css';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About Us</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;