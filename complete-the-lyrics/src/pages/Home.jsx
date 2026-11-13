import { SingerNav } from '../components/SingerNav.jsx'

export default function Home({ lyrics }) {
    return (
        <main className="app-container">
            <h1 className="app-title">Complete the Lyrics</h1>

            <SingerNav />

            <section className="lyrics-board">
                {lyrics.length === 0 ? (
                    <p className="no-lyrics">No lyrics yet. Start typing!</p>
                ) : (
                    lyrics.map((line) => (
                        <div
                            key={line.id}
                            className="lyric-pill"
                            <style = {{ backgroundColor: line.color }}
                        >
                            {line.text}
                        </div>
                    ))
                )}
            </section>
        </main>
    );
}