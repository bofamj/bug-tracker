import React from "react";

const SingelTicketLayout = (singelIssue) => {
  return (
    <>
      <dir className="u-align--cinter u-margin-bottom-x-big">
        <h1 className="heading-primary ">Ticket</h1>
      </dir>
      <div className="singleIssue__ditails wraber">
        <span className="singleIssue__tage">issue name</span>
        <p className="heading-tertiary">{singelIssue.singelIssue.name}</p>
      </div>
      <div className="singleIssue__ditails wraber">
        <span className="singleIssue__tage u-display-block">
          issue discrption
        </span>
        <p className="u-display-block heading-tertiary">
          {singelIssue.singelIssue.discrption}
        </p>
      </div>
      <div className="singleIssue__ditails wraber ">
        <span className="singleIssue__tage">app name</span>
        <p className="heading-tertiary">{singelIssue.singelIssue.project}</p>
      </div>
      <div className="singleIssue__ditails wraber">
        <span className="singleIssue__tage">app version</span>
        <p className="heading-tertiary"> {singelIssue.singelIssue.version}</p>
      </div>
      <div className="singleIssue__ditails wraber">
        <span className="singleIssue__tage">issue priority</span>
        <p className="heading-tertiary"> {singelIssue.singelIssue.priority}</p>
      </div>
      <div className="singleIssue__ditails wraber">
        <span className="singleIssue__tage">created by</span>
        <p className="heading-tertiary">{singelIssue.singelIssue.createdBy}</p>
      </div>
      <div className="singleIssue__ditails wraber">
        <span className="singleIssue__tage"> assigned to</span>
        <p className="heading-tertiary">{singelIssue.singelIssue.assignedTo}</p>
      </div>
      <div className="singleIssue__ditails wraber">
        <span className="singleIssue__tage">issue Status</span>
        <p className="heading-tertiary">
          {singelIssue.singelIssue.issueStatus}
        </p>
      </div>
    </>
  );
};

export default SingelTicketLayout;
