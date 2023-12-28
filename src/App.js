import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Home from './pages/Home/Home';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
