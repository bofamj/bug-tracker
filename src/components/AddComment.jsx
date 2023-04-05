import React, { useState } from "react";

const AddComment = () => {
  const [isCommint, setIsCommint] = useState(false); //!this one
  const [commint, setCommint] = useState(""); //!this one
  //! add a commint
  const addCommit = () => {
    //!this one
    console.log(commint);
  };
  return (
    <div className="singleIssue__ditails wraber ">
      <div className="tex-wraber u-margin-bottom-big u-margin-top-big ">
        <span className="singleIssue__tage">add comment</span>
        <button
          className="btn btn--large btn--blue"
          onClick={() => setIsCommint(!isCommint)}
        >
          add comment
        </button>
      </div>
      {isCommint && (
        <div className="form__grop">
          <textarea
            type="text"
            id="commint"
            name="commint"
            placeholder="add your commint"
            className="form__input"
            value={commint}
            onChange={(e) => setCommint(e.target.value)}
          />
          <label htmlFor="discrption" className="form__label">
            add your commint
          </label>
          <button
            className="btn btn__small btn--orange"
            type="button"
            onClick={() => addCommit()}
          >
            add
          </button>
        </div>
      )}
    </div>
  );
};

export default AddComment;
