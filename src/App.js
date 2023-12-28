import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Home from './pages/Home/Home';
import ForgotPassword from './components/Forgotpassword/ForgotPassword';
import Register from './components/Register/Register';
import Register2 from './components/Register2/Register2';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register2" element={<Register2 />} />
      </Routes>
    </div>
  );
}
export default App;
