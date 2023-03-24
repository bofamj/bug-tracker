import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "../components/NavBar";
const DashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector((store) => store.users);

  useEffect(() => {
    toast.success("you have successfully logged in", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }, [users]);

  return (
    <main className="dashBoard">
      <NavBar />
      {/* <div>DashBoard</div>
      <button onClick={() => handileSignOUt()}>signOUt</button> */}
      <ToastContainer />
    </main>
  );
};

export default DashBoard;
