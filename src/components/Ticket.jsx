import React from "react";

const Ticket = ({ ticket }) => {
  return (
    <div className="ticket">
      <h1 className="heading-secondery"> {ticket.name}</h1>
      <div className="wraber">
        <p lassName="ticket__ditails">ticket-discrption :</p>
        <p className="ticket__discription">{ticket.discrption}</p>
      </div>
      <p className="ticket__ditails">{ticket.project}</p>
      <p className="ticket__ditails">
        <span className="ticket__tag">ticket-project :</span> {ticket.project}
      </p>
      <p className="ticket__ditails">
        <span className="ticket__tag">ticket-priority :</span> {ticket.priority}
      </p>
      <p className="ticket__ditails">
        <span className="ticket__tag">divaloper : </span>
        {ticket.assignedTo}
      </p>
      <p className="ticket__ditails">
        <span className="ticket__tag">createdBy :</span> {ticket.createdBy}
      </p>
    </div>
  );
};

export default Ticket;
//assignedTo;
//createdBy

//issueStatus

//resolutionSummary;
