
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      <Dashboard/>
      <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Signup' element={<Signup/>}/>
    </Routes>
     <Navbar/> 
    </div>
  );
}

export default App;
