import { Routes, Route, Link } from 'react-router';
import './styles/App.scss';

import { HomePage, EventPage, SongPage } from './pages';

function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/events">Event</Link>
                </li>
                <li>
                    <Link to="/songs">Song</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventPage />} />
                <Route path="/songs" element={<SongPage />} />
            </Routes>
        </div>
    );
}

export default App;
