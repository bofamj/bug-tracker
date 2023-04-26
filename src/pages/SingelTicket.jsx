import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import {
  deleteIssue,
  updateIssue,
  getAllIssues,
} from "../features/issue/issueSlice";
import { getAllmessages } from "../features/messag/messageSlice";
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
  const { issues } = useSelector((store) => store.issues);
  const { messages } = useSelector((store) => store.messages);
  const { users } = useSelector((store) => store.users);

  let singelIssue = issues.find((issue) => issue._id === id);
  let singelIssueMessages = messages.filter(
    (message) => message.belongTo === singelIssue._id
  );

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

  return (
    <section className="singleIssue">
      <SingelTicketLayout singelIssue={singelIssue} />
      {users.userId === singelIssue.createdBy && (
        <div className="singleIssue__button-wraber wraber-row">
          <button className="btn__icon" onClick={() => setIsOpen(true)}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ color: "#183153" }}
              onClick={() => setIsOpen(true)}
              size="xl"
            />
          </button>
          <Button
            cleckHandeler={deleteAnIssue}
            name={"delete ticket"}
            iconType="delete"
          />

          <div className="wraber-row">
            <Button cleckHandeler={updateAnIssue} name={"tag as resolved"} />
          </div>
        </div>
      )}
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

        {singelIssueMessages &&
          singelIssueMessages.map((comment) => (
            <Comment key={comment._id} IssueMessage={comment} />
          ))}
      </div>
      <ToastContainer />
    </section>
  );
};

export default SingelTicket;
//
