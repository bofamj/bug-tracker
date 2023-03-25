import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "../components/NavBar";
import Ticket from "../components/Ticket";

const test = [
  {
    id: 1,
    name: "rsponsiv navbar",
    discrption: "navbar isnt rsponsive",
    project: "blog app",
    priority: "high",
    createdBy: "mustafa",
    resolutionSummary: "fix the problem",
    assignedTo: "lyla",
    issueStatus: "pending",
  },
  {
    id: 2,
    name: "rsponsiv navbar",
    discrption: "navbar isnt rsponsive",
    project: "blog app",
    priority: "high",
    createdBy: "mustafa",
    resolutionSummary: "fix the problem",
    assignedTo: "lyla",
    issueStatus: "pending",
  },
  {
    id: 3,
    name: "rsponsiv navbar",
    discrption: "navbar isnt rsponsive",
    project: "blog app",
    priority: "high",
    createdBy: "mustafa",
    resolutionSummary: "fix the problem",
    assignedTo: "lyla",
    issueStatus: "pending",
  },
  {
    id: 4,
    name: "rsponsiv navbar",
    discrption: "navbar isnt rsponsive",
    project: "blog app",
    priority: "high",
    createdBy: "mustafa",
    resolutionSummary: "fix the problem",
    assignedTo: "lyla",
    issueStatus: "pending",
  },
];

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
      {
        <div className="dashBoard__continer">
          <div className="u-algn-center">
            <h1 className="heading-primary u-margin-bottom-big ">DashBoard</h1>
          </div>
          <section className="dashBoard__tekets-wraber">
            {test.map((ticket) => {
              return <Ticket key={ticket.id} ticket={ticket} />;
            })}
          </section>
        </div>
      }
      <ToastContainer />
    </main>
  );
};

export default DashBoard;
