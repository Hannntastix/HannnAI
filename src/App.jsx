import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Explore from './pages/Explore';
import Home from './pages/Home';
import NavbarFooter from './components/NavbarFooter';
import Navbars from './components/Navbars';
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

function App() {
  return (
    <>
      <KindeProvider
        clientId="5e42f74859564674b3a2c1f66aa9a164"
        domain="https://hannnai.kinde.com"
        redirectUri="https://hannn-ai.vercel.app"
        logoutUri="https://hannn-ai.vercel.app"
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavbarFooter />}>
              <Route index element={<Home />} />
              <Route path="explore" element={<Explore />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </KindeProvider>
    </>
  );
}

export default App;
