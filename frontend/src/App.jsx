import { Routes, Route } from "react-router-dom";
import Fetch from "./pages/Fetch";
import Hero from "./pages/Hero";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/search" element={<Fetch />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
