import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Regiter from "./components/Regiter";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import MainDashBoard from "./pages/MainDashBoard";
import YourIssues from "./pages/YourIssues";
import CreateTicket from "./components/CreateTicket";
import SingelTicket from "./pages/SingelTicket";

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
              <Route path="create" element={<CreateTicket />} />
              <Route path="singel/:id" element={<SingelTicket />} />
            </Route>
          )}
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
