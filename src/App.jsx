import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Explore from './pages/Explore';
import Home from './pages/Home';
import NavbarFooter from './components/NavbarFooter';
import Navbars from './components/Navbars';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarFooter />}>
            <Route index element={<Home />} />
            <Route path="explore" element={<Explore />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
