import './assets/css/App.css'
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from './components/Nav';
import GallaryPage from './pages/GallaryPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import BackToTopBtn from './components/BackToTopBtn';
import BookDetailPage from './pages/BookDetailPage';
import Test from './pages/Test';
function App() {
  const {pathname} = useLocation();

  return (
    <div className="App">
      <Nav />
      <BackToTopBtn />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookstore" element={<GallaryPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/test" element={<Test />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/:isbn13/detail' element={<BookDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
