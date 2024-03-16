
import './App.css';
import {Route,Routes} from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <div className="w-[100%] h-[100%] bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
