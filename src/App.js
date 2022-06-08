import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>



<Route path='/search' element={<SearchPage/> } />
<Route path='/' element={<Home/>} />


    </Routes>
    </Router>

    </div>
  );
}

export default App;
