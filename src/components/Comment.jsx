import { useDispatch, useSelector } from "react-redux";
import { gitUser } from "../features/user/userSlice";
import { useEffect } from "react";

const Comment = (IssueMessage) => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.users);
  const { userEmail, userName } = users;

  useEffect(() => {
    dispatch(gitUser(IssueMessage.IssueMessage.writingBy));
  }, []);
  console.log("🚀 ~ file: Comment.jsx:9 ~ Comment ~ users:", users);
  return (
    <div className="u-margin-bottom-big background-color box-size-medium u-padding u-border-radius">
      <div className="tex-wraber">
        <p className=" heading-tertiary">{userName}</p>
        <p className=" heading-tertiary">{userEmail}</p>
      </div>
      <div className="u-margin-small">
        <p className=" heading-secondery">
          {IssueMessage.IssueMessage.message}
        </p>
      </div>
    </div>
  );
};

export default Comment;
