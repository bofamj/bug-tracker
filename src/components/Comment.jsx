import { useDispatch, useSelector } from "react-redux";
import { gitUser } from "../features/user/userSlice";
import { deleteMessage, getAllmessages } from "../features/messag/messageSlice";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";

const Comment = (IssueMessage) => {
  const dispatch = useDispatch();
  const { users, user } = useSelector((store) => store.users);
  const { meassage } = useSelector((store) => store.messages);
  const { userEmail, userName } = users;

  const deleteAMessage = () => {
    dispatch(deleteMessage(IssueMessage.IssueMessage._id));
    toast.success(meassage, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    dispatch(gitUser(IssueMessage.IssueMessage.writingBy));
    dispatch(getAllmessages());
  }, []);

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
      {user.userId === IssueMessage.IssueMessage.writingBy && (
        <>
          <button className="btn__icon u-margin-right-small">
            <FontAwesomeIcon
              icon={faTrash}
              style={{ color: "#d11a2a" }}
              onClick={() => deleteAMessage()}
            />
          </button>
          <button className="btn__icon ">
            <FontAwesomeIcon
              icon={faPenToSquare}
              bounce
              style={{ color: "#183153" }}
            />
          </button>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default Comment;
