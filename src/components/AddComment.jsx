import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createmessage } from "../features/messag/messageSlice";

const AddComment = (singelIssue) => {
  const dispatch = useDispatch();
  const { _id } = singelIssue.singelIssue;
  const [isCommint, setIsCommint] = useState(false);
  const [commint, setCommint] = useState("");
  //! add a commint
  const addCommit = () => {
    const data = {
      message: commint,
      writingBy: "6415aebf3e304d730ab06f1b",
      belongTo: _id,
    };
    //!this one
    dispatch(createmessage(data));
  };
  return (
    <div className="singleIssue__ditails wraber ">
      <div className="tex-wraber u-margin-bottom-big u-margin-top-big ">
        <span className="singleIssue__tage">add comment</span>
        <button
          className="btn btn--medium btn--blue"
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
