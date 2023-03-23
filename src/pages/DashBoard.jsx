import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../features/user/userSlice";
const DashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector((store) => store.users);
  const handileSignOUt = () => {
    dispatch(signOut());
    navigate("/");
  };

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
    <>
      <div>DashBoard</div>
      <button onClick={() => handileSignOUt()}>signOUt</button>
      <ToastContainer />
    </>
  );
};

export default DashBoard;
