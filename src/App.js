import './assets/css/App.css'
import { Route, Routes } from "react-router-dom";
import Nav from './components/common/Nav';
import BookstorePage from './pages/BookstorePage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Footer from './components/common/Footer';
import BackToTopBtn from './components/common/BackToTopBtn';
import BookDetailPage from './pages/BookDetailPage';
import SurveyPage from './pages/SurveyPage';
function App() {
  return (
    <div className="App">
      <Nav />
      <BackToTopBtn />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookstore" element={<BookstorePage />} />
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
