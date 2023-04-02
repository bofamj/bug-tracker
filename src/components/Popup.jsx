import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { updateIssue } from "../features/issue/issueSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Popup = ({ setIsOpen, singelIssue }) => {
  const navigate = useNavigate();
  const {
    name,
    discrption,
    priority,
    issueStatus,
    assignedTo,
    project,
    version,
    _id,
  } = singelIssue;

  const dishpatch = useDispatch();
  const [updated, setUpdated] = useState({
    name,
    discrption,
    priority,
    issueStatus,
    assignedTo,
    project,
    version,
    _id,
  });

  //!update issue functionality
  const updateAnIssue = () => {
    console.log(updated);
    dishpatch(updateIssue(updated));
    toast.success("you successfuly create a new ticket", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigate("/mainDashBoard/dash-board");
  };

  const handelChange = (e) => {
    setUpdated((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="popup__wraper">
      <form action="" className="form">
        <div className="register__heading u-margin-bottom-big tex-wraber u-align--cinter">
          <h2 className="heading-primary u-margin-bottom-big">update ticket</h2>
          <button
            type="button"
            className="u-position-absolut btn__close"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="form__grop">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="tiket name"
            className="form__input"
            value={updated.name}
            onChange={handelChange}
          />
          <label htmlFor="name" className="form__label"></label>
        </div>
        <div className="form__grop">
          <textarea
            type="text"
            id="discrption"
            name="discrption"
            placeholder="ticket discrption"
            className="form__input"
            value={updated.discrption}
            onChange={handelChange}
          />
          <label htmlFor="discrption" className="form__label">
            ticket discription
          </label>
        </div>
        <div className=" createTicket__grop">
          <input
            type="text"
            id="priority"
            name="priority"
            placeholder="tiket priority"
            className="form__input createTicket__dubel "
            value={updated.priority}
            onChange={handelChange}
          />
          <label htmlFor="priority" className="form__label">
            priority
          </label>

          <input
            type="text"
            id="issueStatus"
            name="issueStatus"
            placeholder="tiket Status"
            className="form__input  createTicket__dubel"
            value={updated.issueStatus}
            onChange={handelChange}
          />
          <label htmlFor="issueStatus" className="form__label">
            tiket status
          </label>
        </div>
        <div className=" createTicket__grop">
          <input
            type="text"
            id="assignedTo"
            name="assignedTo"
            placeholder="assigned user"
            className="form__input createTicket__trepel"
            value={updated.assignedTo}
            onChange={handelChange}
          />
          <label htmlFor="assignedTo" className="form__label">
            assigned user
          </label>
          <input
            type="text"
            id="project"
            name="project"
            placeholder="app name"
            className="form__input createTicket__trepel"
            value={updated.project}
            onChange={handelChange}
          />
          <label htmlFor="project" className="form__label">
            app name
          </label>
          <input
            type="text"
            id="version"
            name="version"
            placeholder="app version"
            className="form__input createTicket__trepel"
            value={updated.version}
            onChange={handelChange}
          />
          <label htmlFor="version" className="form__label">
            app version
          </label>
        </div>
        <div className="createTicket__btn">
          <button
            className="btn btn--blue btn--large"
            type="button"
            onClick={() => updateAnIssue()}
          >
            update &rarr;
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Popup;
