import './assets/css/App.css'
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from './components/common/Nav';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Footer from './components/common/Footer';
import BackToTopBtn from './components/common/BackToTopBtn';
import BookDetailPage from './pages/BookDetailPage';
import SurveyPage from './pages/SurveyPage';
import GalleryPage from './pages/GalleryPage';
import StorePage from './pages/StorePage';

function App() {
  const {pathname} = useLocation();
  return (
    <div className="App">
      {
        pathname === "/store" ? (<></>) : (<Nav />)
      }
      <BackToTopBtn />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/:user_id/gallery" element={<GalleryPage />} />
        
        <Route path="/store" element={<StorePage />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/:isbn13/detail' element={<BookDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
