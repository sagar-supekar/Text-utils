// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
  <div className="App">
    
   <>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route exact path='/About' element={<About/>}/>
      <Route exact path="/TextForm" element={<TextForm/>}/>
    </Routes>

  </BrowserRouter>
  


   </>
   </div>
   
  );
}

export default App;
