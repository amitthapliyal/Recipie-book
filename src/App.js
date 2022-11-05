
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from './Pages/Create/Create';
import Home from './Pages/home/Home';
import Recipie from './Pages/recipie/Recipie';
import Search from './Pages/search/Search';
import Navbar from './Component/Navbar';

function App() {
  
  return (
    <div className="App" >
          <h1>Dark Mode Test</h1>
      <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/recipie/:id" element={<Recipie/>}></Route>
      <Route path="/search" element={<Search/>}></Route>
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
