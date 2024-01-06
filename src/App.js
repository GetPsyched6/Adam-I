import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import ScrollToTop from './ScrolltoTop';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Register from './pages/Register/Register';
import Morocco from './pages/Morocco/Morocco';
import Kenya from './pages/Kenya/Kenya';
import Nigeria from './pages/Nigeria/Nigeria';
import Namibia from './pages/Namibia/Namibia';
import Contactregister from './pages/ContactRegister/ContactRegister';
import Companyregister from './pages/CompanyRegister/CompanyRegister';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/companyregister" element={<Companyregister />} />
        <Route path="contactregister" element={<Contactregister />} />
        <Route path="/Morocco" element={<Morocco />} />
        <Route path="/Kenya" element={<Kenya />} />
        <Route path="/Nigeria" element={<Nigeria />} />
        <Route path="/Namibia" element={<Namibia />} />
      </Routes>
    </div>
  );
}
export default App;
