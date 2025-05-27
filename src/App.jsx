
import Login from './components/auth/Login';
import Mainpage from './components/Mainpage';
import './index.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <div>
        <Router>
          <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/login' element={<Login />} /> 
      <Route path='/mainpage' element={<Mainpage/>}/>
          </Routes>  
      </Router>
      </div>
    </>
  )
}

export default App
