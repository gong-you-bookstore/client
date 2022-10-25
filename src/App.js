import './assets/css/App.css'
import { Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import GallaryPage from './pages/GallaryPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookstore" element={<GallaryPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
