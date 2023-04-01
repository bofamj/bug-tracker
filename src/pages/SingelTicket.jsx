import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAllIssues } from "../features/issue/issueSlice";
import Popup from "../components/Popup";
import { useState } from "react";

const SingelTicket = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { issues, isLoading } = useSelector((store) => store.issues);

  //*find the issue by id
  const singelIssue = issues.find((issue) => issue._id === id);

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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          consectetur eligendi blanditiis laboriosam nulla porro culpa eum nemo
          odit exercitationem.
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
      <div className="singleIssue__button-wraber">
        <div className="wraber-row">
          <button
            className="btn btn--large btn--blue"
            onClick={() => setIsOpen(true)}
          >
            update ticket
          </button>
          <button className="btn btn--large btn--blue">delete ticket</button>
        </div>
        <div className="wraber-row">
          <button className="btn btn--large btn--blue">tag as resolved</button>
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
