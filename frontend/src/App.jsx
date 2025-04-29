import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/Login.jsx";
import Main from "./pages/Main.jsx";
import SuperHeroBox from "./pages/SuperHeroBox.jsx";
import Buying from "./pages/Buying.jsx";
import Selling from "./pages/Selling.jsx";
import MemeLook from "./pages/memeLook.jsx";
import HeroLook from "./pages/heroLook.jsx";
import MemeLook2 from "./pages/memeLook2.jsx";
import HeroLook2 from "./pages/heroLook2.jsx" ;
import MemeRandom from "./pages/MemeRandom.jsx";
import Profile from "./pages/profile.jsx";
import HeroRandom from "./pages/HeroRandom.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/superhero" element={<SuperHeroBox />} />
        <Route path="/shop/buy" element={<Buying />} />
        <Route path="/shop/sell" element={<Selling />} />

        <Route path="/memeLook" element={<MemeLook />} />
        <Route path="/memeLook2" element={<MemeLook2 />} />
        <Route path="/heroLook" element={<HeroLook />} />
        <Route path="/heroLook2" element={<HeroLook2 />} />
        <Route path="/memeRandom" element={<MemeRandom />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/heroRandom" element={<HeroRandom />} />
     
   


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;