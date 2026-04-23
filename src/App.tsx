import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Ecosystem } from './pages/Ecosystem';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
      </Routes>
    </BrowserRouter>
  );
}
