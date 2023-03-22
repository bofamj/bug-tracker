import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

const DashBoard = () => {
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
    <>
      <div>DashBoard</div>
      <ToastContainer />
    </>
  );
};

export default DashBoard;
