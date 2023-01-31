import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NFTInfoPage from "./pages/NFTInfoPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn-more" element={<NFTInfoPage />} />
      </Routes>
    </div>
  );
}
