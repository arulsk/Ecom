import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <><Header/> <Home/></>}></Route>
        <Route path='/checkout' element={ <><Header/> <Checkout/></>}></Route>
        <Route path='/login' element={ <><Login/></>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>);
}

export default App;
