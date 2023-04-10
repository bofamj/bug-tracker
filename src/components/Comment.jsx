import { useDispatch, useSelector } from "react-redux";
import { gitUser } from "../features/user/userSlice";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Comment = (IssueMessage) => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.users);
  const { userEmail, userName } = users;

  useEffect(() => {
    dispatch(gitUser(IssueMessage.IssueMessage.writingBy));
  }, []);
  console.log("🚀 ~ file: Comment.jsx:9 ~ Comment ~ users:", users);
  return (
    <div className="u-margin-bottom-big background-color  u-padding u-border-radius">
      <div className="tex-wraber">
        <p className=" heading-tertiary">{userName}</p>
        <p className=" heading-tertiary">{userEmail}</p>
      </div>
      <div className="u-margin-small">
        <p className=" heading-secondery">
          {IssueMessage.IssueMessage.message}
        </p>
      </div>
      <button className="btn__icon u-margin-right-small">
        <FontAwesomeIcon icon={faTrash} style={{ color: "#d11a2a" }} />
      </button>
      <button className="btn__icon ">
        <FontAwesomeIcon
          icon={faPenToSquare}
          bounce
          style={{ color: "#183153" }}
        />
      </button>
    </div>
  );
};

export default Comment;
