import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Home from './pages/Home/Home';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Register from './components/Register/Register';
import Morocco from './pages/Morocco/Morocco';
import Kenya from './pages/Kenya/Kenya';
import Nigeria from './pages/Nigeria/Nigeria';
import Namibia from './pages/Namibia/Namibia';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/Morocco" element={<Morocco />} />
        <Route path="/Kenya" element={<Kenya />} />
        <Route path="/Nigeria" element={<Nigeria />} />
        <Route path="/Namibia" element={<Namibia />} />
      </Routes>
    </div>
  );
}
export default App;
