import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { gitAllUsers } from "../features/user/userSlice";
const Ticket = ({ ticket }) => {
  const [createdBy, setCreatedBy] = useState("");
  const dispatch = useDispatch();
  const { allUsers, isLoading, users } = useSelector((store) => store.users);
  const findUsers = () => {
    if (allUsers) {
      const athur = allUsers.find((user) => {
        if (user._id === ticket.createdBy) {
          return user;
        }
      });
      setCreatedBy(athur && athur.name);
    }
  };
  useEffect(() => {
    dispatch(gitAllUsers());
    findUsers();
  }, []);

  return (
    <Link
      to={`/mainDashBoard/singel/${ticket ? ticket._id : ""}`}
      className="link"
    >
      <div className="ticket">
        <h1 className="heading-secondery">
          {ticket.name.length < 20
            ? ticket.name
            : ticket.name.substr(0, 20) + "..."}{" "}
        </h1>
        <div className="wraber">
          <p className="ticket__ditails">ticket-discrption :</p>
          <p className="ticket__discription heading-tertiary">
            {ticket.discrption.length < 20
              ? ticket.discrption
              : ticket.discrption.substr(0, 20) + "..."}
          </p>
        </div>

        <p className="ticket__ditails">
          <span className="ticket__tag">ticket-project :</span>
          <span className="heading-tertiary">{ticket.project}</span>
        </p>
        <p className="ticket__ditails">
          <span className="ticket__tag">ticket-priority :</span>
          <span className="heading-tertiary">{ticket.priority}</span>
        </p>
        <p className="ticket__ditails">
          <span className="ticket__tag">assigned user : </span>
          <span className="heading-tertiary">
            {ticket.assignedTo && ticket.assignedTo}
          </span>
        </p>
        <p className="ticket__ditails">
          <span className="ticket__tag">ticket status : </span>
          <span className="heading-tertiary">
            {ticket.issueStatus && ticket.issueStatus}
          </span>
        </p>
        <p className="ticket__ditails">
          <span className="ticket__tag">createdBy :</span>
          <span className="heading-tertiary">{createdBy ? createdBy : ""}</span>
        </p>
      </div>
    </Link>
  );
};

export default Ticket;
//assignedTo;
//createdBy

//issueStatus

//resolutionSummary;
