
import { Toaster } from 'react-hot-toast';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Mainpage from './components/Mainpage';
import './index.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {


  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/login' element={<Login />} /> 
      <Route path='/register' element={<Register />} />
      <Route path='/mainpage' element={<Mainpage/>}/>
          </Routes>  
      </Router>
      <Toaster position='bottom-center' />
      </div>
    </>
  )
}

export default App
