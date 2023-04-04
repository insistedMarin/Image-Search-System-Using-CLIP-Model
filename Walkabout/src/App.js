import './App.css';

import { Route, Routes } from 'react-router-dom';
import  Home from './pages/home'
// import Register from './pages/register';
import Clip from './pages/clip';
function App(){
  return <Routes>
    <Route path='/' element={<Home/>}>
    </Route>
    <Route path='/clip' element={<Clip/>}></Route>
    {/* <Route path='/register' element={<Register/>}></Route> */}
  </Routes>
}

export default App;
