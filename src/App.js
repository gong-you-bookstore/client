import './assets/css/App.css'
import { Route, Routes } from "react-router-dom";

import Bookstore from './pages/Bookstore';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
// https://stackoverflow.com/questions/69473259/how-to-show-or-hide-navbar-when-scroll-use-react-js
function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/bookstore" element={<Bookstore />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
