import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import LogIn from "./pages/Login.jsx";
import Main from "./pages/Main.jsx";
import SuperHeroBox from "./pages/SuperHeroBox.jsx";
import Buying from "./pages/Buying.jsx";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;