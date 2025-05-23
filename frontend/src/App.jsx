import { Routes, Route } from "react-router-dom";
import Fetch from "./pages/Fetch";
import Hero from "./pages/Hero";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />}></Route>
      <Route path="/fetch" element={<Fetch />}></Route>
    </Routes>
  );
}

export default App;
