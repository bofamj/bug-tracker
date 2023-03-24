import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Regiter from "./components/Regiter";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";

function App() {
  const { users } = useSelector((store) => store.users);
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Regiter />} />
          {userToken && <Route path="/dash-board" element={<DashBoard />} />}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
