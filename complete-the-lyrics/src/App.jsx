import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingerPage from './pages/SingerPage';
import NotFound from './pages/NotFound';

export default function App() {
    const [lyrics, setLyrics] = useState([]);

    const handleAddLyric = (newLyric) => {
        setLyrics((prevLyrics) => [...prevLyrics, newLyric]);
    };

    return (
        <Routes>
          <Route path="/" element={<Home lyrics={lyrics} />} />
          <Route
            path="/singer/:singerId"
            element={<SingerPage lyrics={lyrics} onAddLyric={handleAddLyric} />}
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
  }
