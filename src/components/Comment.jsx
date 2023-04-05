import React from "react";

const Comment = (IssueMessage) => {
  return (
    <div>
      <p className="heading-tertiary">{IssueMessage.IssueMessage.message}</p>
    </div>
  );
};

export default Comment;
