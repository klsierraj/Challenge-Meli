import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import Navbar from './components/Navbar/NavBar';
import { HomePage } from './pages/HomePage';
import DescriptionPage from './pages/DescriptionPage';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="items" element={<SearchPage />} />
        <Route path="items/:id" element={<DescriptionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
