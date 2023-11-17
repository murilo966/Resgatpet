import './App.css';
import { Routes, Route } from 'react-router-dom';
import RegistroPF from './paginas/RegitroPF';
import ComoAjudar from './paginas/ComoAjudar';
import Home from './paginas/Home';
import Login from './paginas/Login';
import QuemSomos from './paginas/QuemSomos';
import RegistroPJ from './paginas/RegistroPJ';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/quem-somos' element={<QuemSomos/>} ></Route>
        <Route path='/registro-pf' element={<RegistroPF/>} ></Route>
        <Route path='/registro-pj' element={<RegistroPJ/>} ></Route>
        <Route path='/como-ajudar' element={<ComoAjudar/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
