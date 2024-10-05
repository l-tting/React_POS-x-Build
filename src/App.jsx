import { Routes, Route } from 'react-router-dom';
import Home from "./assets/Pages/Home";
import Login from './assets/Pages/Login';
import Register from './assets/Pages/Register';

const App =()=>{
  return(
    <>
   
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
    </Routes>
   
    </>
  )
}
export default App;