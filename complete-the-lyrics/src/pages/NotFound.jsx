import { Link } from "react-router-dom";

export default function NotFound({ message = '404 - Page Not Found.' }) {
    return (
        <main className="app-container not-found">
            <h1>{message}</h1>
            <p>The page or singer you requested does not exist...</p>
            <Link to="/" className="home-button">
                Back to Home
            </Link>
        </main>
    );
}