import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gitAllUsers } from "../features/user/userSlice";
const Ticket = ({ ticket }) => {
  const [createdBy, setCreatedBy] = useState("");
  const dispatch = useDispatch();
  const { allUsers, isLoading } = useSelector((store) => store.users);
  const findUsers = () => {
    const athur = allUsers.find((user) => {
      if (user._id === ticket.createdBy) {
        return user;
      }
    });
    setCreatedBy(athur.name);
  };
  useEffect(() => {
    dispatch(gitAllUsers());
    findUsers();
  }, []);

  return (
    <div className="ticket">
      <h1 className="heading-secondery"> {ticket.name}</h1>
      <div className="wraber">
        <p className="ticket__ditails">ticket-discrption :</p>
        <p className="ticket__discription">{ticket.discrption}</p>
      </div>
      <p className="ticket__ditails">{ticket.project}</p>
      <p className="ticket__ditails">
        <span className="ticket__tag">ticket-project :</span> {ticket.project}
      </p>
      <p className="ticket__ditails">
        <span className="ticket__tag">ticket-priority :</span> {ticket.priority}
      </p>
      {/* <p className="ticket__ditails">
        <span className="ticket__tag">assigned user : </span>
        {ticket.assignedTo}
      </p> */}
      <p className="ticket__ditails">
        <span className="ticket__tag">createdBy :</span> {createdBy}
      </p>
    </div>
  );
};

export default Ticket;
//assignedTo;
//createdBy

//issueStatus

//resolutionSummary;
