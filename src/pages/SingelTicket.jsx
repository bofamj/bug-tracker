import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteIssue,
  updateIssue,
  findSingelIssue,
  getAllIssues,
} from "../features/issue/issueSlice";
import { createmessage, getAllmessages } from "../features/messag/messageSlice";
import { findTicetMessages } from "../features/messag/messageSlice";
import Popup from "../components/Popup";
import Comment from "../components/Comment";
import SingelTicketLayout from "../components/SingelTicketLayout";
import AddComment from "../components/AddComment";
import Button from "../components/Button";

const SingelTicket = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { id } = useParams();
  const dishpatch = useDispatch();
  const navigate = useNavigate();
  const { issues, isLoading } = useSelector((store) => store.issues);
  const { messages, ticketMessages, isSuccss } = useSelector(
    (store) => store.messages
  );

  let singelIssue = issues.find((issue) => issue._id === id);
  useEffect(() => {
    dishpatch(getAllIssues());
    dishpatch(getAllmessages());
  }, []);
  //*find the issue by id

  const [resolved, setResolved] = useState({
    issueStatus: "resolved",
    _id: singelIssue._id,
    //_id: issues._id,
  });

  //!delete issue
  const deleteAnIssue = () => {
    dishpatch(deleteIssue(singelIssue));
    toast.success("you successfuly deleted a ticket", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigate("/mainDashBoard/dash-board");
  };

  //!update issue functionality
  const updateAnIssue = () => {
    dishpatch(updateIssue(resolved));
    toast.success("you successfuly changed the issue status", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigate("/mainDashBoard/dash-board");
  };

  useEffect(() => {
    dishpatch(findTicetMessages(singelIssue._id));
  }, []);

  return (
    <section className="singleIssue">
      <SingelTicketLayout singelIssue={singelIssue} />
      <div className="singleIssue__button-wraber">
        <div className="wraber-row">
          <button
            className="btn btn--medium btn--blue"
            onClick={() => setIsOpen(true)}
          >
            update ticket
          </button>
          <Button cleckHandeler={deleteAnIssue} name={"delete ticket"} />
        </div>
        <div className="wraber-row">
          <Button cleckHandeler={updateAnIssue} name={"tag as resolved"} />
        </div>
      </div>
      {isOpen && (
        <section className=" u-dark-wraber">
          <div className="popup">
            {" "}
            <Popup setIsOpen={setIsOpen} singelIssue={singelIssue} />
          </div>
        </section>
      )}

      <AddComment singelIssue={singelIssue} />

      <div>
        <h1 className="heading-secondery u-margin-bottom-big">Comment</h1>

        {ticketMessages &&
          ticketMessages.map((comment) => (
            <Comment key={comment._id} IssueMessage={comment} />
          ))}
      </div>
      <ToastContainer />
    </section>
  );
};

export default SingelTicket;
//
