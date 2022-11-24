import './assets/css/App.css'
import { Route, Routes } from "react-router-dom";
import Nav from './components/common/Nav';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Footer from './components/common/Footer';
import BackToTopBtn from './components/common/BackToTopBtn';
import BookDetailPage from './pages/BookDetailPage';
import SurveyPage from './pages/SurveyPage';
import StorePage from './pages/StorePage';
import GenrePage from './pages/GenrePage';
import LoginPage from './pages/LoginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GalleryPage from './pages/GalleryPage';
import MyPage from './pages/MyPage';
import Test from './pages/Test';
function App() {
  return (
    <div className="App">
      <Nav />
      <BackToTopBtn />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<Test />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/genre/:kdc" element={<GenrePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path='/:isbn13/detail' element={<BookDetailPage />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
