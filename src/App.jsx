import { BrowserRouter, Routes, Route } from "react-router-dom";
import Regiter from "./components/Regiter";

import Home from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Regiter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
