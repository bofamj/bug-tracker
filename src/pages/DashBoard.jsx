import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "../components/NavBar";
import Ticket from "../components/Ticket";
import { getAllIssues } from "../features/issue/issueSlice";

const DashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users } = useSelector((store) => store.users);
  const { issues, isLoading } = useSelector((store) => store.issues);

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
  useEffect(() => {
    dispatch(getAllIssues());
  }, []);
  return (
    // <main className="dashBoard">
    <div className="dashBoard__continer">
      <div className="u-algn-center">
        <h1 className="heading-primary u-margin-bottom-big ">DashBoard</h1>
      </div>
      {isLoading ? (
        <h1>loading....</h1>
      ) : (
        <section className="dashBoard__tekets-wraber">
          {issues.map((ticket) => {
            return <Ticket key={ticket.id} ticket={ticket} />;
          })}
        </section>
      )}
      <ToastContainer />
    </div>

    // </main>
  );
};

export default DashBoard;
