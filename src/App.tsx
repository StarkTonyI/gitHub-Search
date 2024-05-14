import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HomePage} from './pages/Homepages'
import {FavouritesPage} from './pages/Favorite'
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gitHub-search/" element={<FavouritesPage />}/>
            </Routes>
        </Router>
    );
}

export default App;
