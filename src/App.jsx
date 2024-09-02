import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Components/Home/home';
import Blog from "./Components/Blog/blog";
import Header from './Components/Header/header';
function App() {
  return (
    
    <BrowserRouter>
    
    <div className="container">
     <Header></Header>
     <main className=''>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
      </Routes>
     </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
