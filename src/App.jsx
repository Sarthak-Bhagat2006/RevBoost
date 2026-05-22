import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReviewPage from "./pages/ReviewPage";
import RedirectedPage from "./pages/RedirectedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ReviewPage />} />

        <Route path="/review-preview" element={<RedirectedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
