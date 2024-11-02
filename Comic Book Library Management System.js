import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
    return <h2>Home Page</h2>;
};

const BrowseCharacters = ({ characters }) => {
    return (
        <div>
            <h2>Browse Characters</h2>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <Link to={`/character/${character.id}`}>{character.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const CharacterDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Character Details for ID: {id}</h2>
            {/* Fetch and display character details here */}
        </div>
    );
};

const Comics = () => {
    return (
        <div>
            <h2>Comics</h2>
            <p>This component is under construction. Check back later!</p>
        </div>
    );
};

const NotFound = () => {
    return <h2>404 - Page Not Found</h2>;
};

const App = () => {
    const characters = [
        { id: 1, name: 'Spider-Man' },
        { id: 2, name: 'Iron Man' },
        { id: 3, name: 'Thor' },
        // Add more characters as needed
    ];

    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/browse">Browse Characters</Link>
                    <Link to="/comics">Comics</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/browse" element={<BrowseCharacters characters={characters} />} />
                    <Route path="/character/:id" element={<CharacterDetails />} />
                    <Route path="/comics" element={<Comics />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
