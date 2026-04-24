import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Ecosystem } from './pages/Ecosystem';
import { AnimatedBackground } from './components/AnimatedBackground';

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
