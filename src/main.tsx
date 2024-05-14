import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import {HomePage} from './pages/Homepages'
import {FavouritesPage} from './pages/Favorite'
import {Provider} from 'react-redux'
import { store } from './store'
import { Navigation } from './Components/Navigation';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <Provider store={store}>
   <Router>
   <Navigation/>
    <Routes>
      <Route path="/gitHub-search" element={<HomePage/>} />
        <Route path="/gitHub-search/main" element={<FavouritesPage />}/>
      </Routes>
    </Router>
  </Provider>
)

