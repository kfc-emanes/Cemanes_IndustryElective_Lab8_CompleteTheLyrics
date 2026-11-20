import { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { singers } from '../data/singers';
import SingerNav from '../components/SingerNav';
import NotFound from './NotFound';

export default function Singerpage({ lyrics, onAddLyric }) {
    const { singerId } = useParams();
    const [draft, setDraft] = useState('');

    const singer = singers.find((s) => s.id === singerId);

    if (!singer) {
        return <NotFound message="Singer not found" />;
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && draft.trim() !== '') {
            e.preventDefault();
            onAddLyric({
                id: Date.now(),
                singerId: singer.id,
                singerName: singer.name,
                text: draft.trim(),
                color: singer.color,
            });
            setDraft('');
        }
};

return (
    <main className="app-container">
        <h1 className="app-title">Complete the Lyrics</h1>

        <SingerNav />

        <div className="singer-meta">
            <span>
                Active Singer: <strong>{singer.name}</strong>
            </span>
            <span>
                Note:  Press Enter to Submit your lyrics.
            </span>
            <Link to="/" className="home-link">
                ← Return Home
            </Link>
        </div>

        <div className="input-wrapper">
            <input 
            type="text"
            className="lyric-input"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={singer.placeholder}
            aria-label={`Type lyrics for ${singer.name}`}
            autoFocus
        />
        </div>

        <section className="lyrics-board">
            {lyrics.map((line) => (
                <div
                    key={line.id}
                    className="lyric-pill"
                    style={{ backgroundColor: line.color }}
                >
                    {line.text}
                </div>
            ))}
            
            {draft.length > 0 && (
                <div
                    className="lyric-pill draft-pill"
                    style={{ backgroundColor: singer.color}}
                >
                    {draft}
                </div>
            )}
        </section>
    </main>
    );
}