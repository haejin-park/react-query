import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ReactQueryPage from './pages/ReactQueryPage';
import NormalPage from './pages/NormalPage';

function App() {
  return (
    <div className="App">
      <nav style={{backgroundColor: "beige", padding: "20px"}}>
        <Link to="/" style={{marginRight: "10px"}}>HomePage</Link>
        <Link to="/normal" style={{marginRight: "10px"}}>Normal fetch</Link>
        <Link to="/react-query" style={{marginRight: "10px"}}>React Query</Link>        
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/normal" element={<NormalPage/>} />
        <Route path="/react-query" element={<ReactQueryPage/>} />
      </Routes>
    </div>
  );
}

export default App;
