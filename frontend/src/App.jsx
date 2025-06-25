import { Routes, Route } from "react-router-dom";
import Fetch from "./pages/Fetch";
import Hero from "./pages/Hero";
import NotFound from "./components/NotFound";
import Predict from "./pages/Predict";
import Stock from "./pages/Stock";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/search" element={<Fetch />} />
      <Route path="/search/:symbol" element={<Stock />} />
      <Route path="/search/:symbol/predict" element={<Predict />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
