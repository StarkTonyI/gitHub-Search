import {Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/Homepages'
import {FavouritesPage} from './pages/Favorite'
import {Navigation} from './Components/Navigation'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/favorites" element={ <FavouritesPage /> } />
      </Routes>
    </>
  )
}

export default App
