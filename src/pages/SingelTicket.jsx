import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteIssue, updateIssue } from "../features/issue/issueSlice";
import { getAllmessages } from "../features/messag/messageSlice";
import Popup from "../components/Popup";

const SingelTicket = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [meg, setMeg] = useState([]);

  const { id } = useParams();
  const dishpatch = useDispatch();
  const navigate = useNavigate();
  const { issues, isLoading } = useSelector((store) => store.issues);
  const { messages } = useSelector((store) => store.messages);

  //*find the issue by id
  const singelIssue = issues.find((issue) => issue._id === id);
  const IssueMessage = meg.find((meg) => singelIssue._id === meg.belongTo);
  const [resolved, setResolved] = useState({
    issueStatus: "resolved",
    _id: singelIssue._id,
  });
  //!delete issue
  const deleteAnIssue = () => {
    console.log(singelIssue);
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
    console.log(resolved);
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
    dishpatch(getAllmessages());
    messages.map((message) => {
      return setMeg(message);
    });
  }, []);

  return (
    <section className="singleIssue">
      <dir className="u-align--cinter u-margin-bottom-x-big">
        <h1 className="heading-primary ">Ticket</h1>
      </dir>
      <div className="singleIssue__ditails wraber">
        <span className="singleIssue__tage">issue name</span>
        <p className="heading-tertiary">{singelIssue.name}</p>
      </div>
      <div className="singleIssue__ditails wraber">
        <span className="singleIssue__tage u-display-block">
          issue discrption
        </span>
        <p className="u-display-block heading-tertiary">
          {singelIssue.discrption}
        </p>
      </div>
      <div className="singleIssue__ditails wraber ">
        <span className="singleIssue__tage">app name</span>
        <p className="heading-tertiary">{singelIssue.project}</p>
      </div>
      <div className="singleIssue__ditails wraber">
        <span className="singleIssue__tage">app version</span>
        <p className="heading-tertiary"> {singelIssue.name}</p>
      </div>
      <div className="singleIssue__ditails wraber">
        <span className="singleIssue__tage">issue priority</span>
        <p className="heading-tertiary"> {singelIssue.version}</p>
      </div>
      <div className="singleIssue__ditails wraber">
        <span className="singleIssue__tage">created by</span>
        <p className="heading-tertiary">{singelIssue.createdBy}</p>
      </div>
      <div className="singleIssue__ditails wraber">
        <span className="singleIssue__tage"> assigned to</span>
        <p className="heading-tertiary">{singelIssue.assignedTo}</p>
      </div>
      <div className="singleIssue__ditails wraber">
        <span className="singleIssue__tage">issue Status</span>
        <p className="heading-tertiary">{singelIssue.issueStatus}</p>
      </div>
      <div className="singleIssue__ditails wraber">
        <span className="singleIssue__tage">issue messamge</span>
        <p className="heading-tertiary">
          {IssueMessage && IssueMessage.message}
        </p>
      </div>
      <div className="singleIssue__button-wraber">
        <div className="wraber-row">
          <button
            className="btn btn--large btn--blue"
            onClick={() => setIsOpen(true)}
          >
            update ticket
          </button>
          <button
            className="btn btn--large btn--blue"
            onClick={() => deleteAnIssue()}
          >
            delete ticket
          </button>
        </div>
        <div className="wraber-row">
          <button
            className="btn btn--large btn--blue"
            onClick={() => updateAnIssue()}
          >
            tag as resolved
          </button>
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
      <ToastContainer />
    </section>
  );
};

export default SingelTicket;
/* name
    discrption
    project
    priority
    createdBy
    closedBy
    resolutionSummary
    assignedTo
    issueStatus
    version"string"
     */
