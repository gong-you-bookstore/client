import './assets/css/App.css'
import { Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import GallaryPage from './pages/GallaryPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';

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
    </div>
  );
}

export default App;
