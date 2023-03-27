import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Regiter from "./components/Regiter";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import MainDashBoard from "./pages/MainDashBoard";
import YourIssues from "./pages/YourIssues";

function App() {
  const { users } = useSelector((store) => store.users);
  const userToken = JSON.parse(localStorage.getItem("userToken"));
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Regiter />} />
          {userToken && (
            <Route path="/mainDashBoard" element={<MainDashBoard />}>
              <Route path="dash-board" element={<DashBoard />} />
              <Route path="your-issues" element={<YourIssues />} />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
