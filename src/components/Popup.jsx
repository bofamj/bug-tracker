import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createTicketSchema } from "../validations/registrSchema";
import { createIssue } from "../features/issue/issueSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Popup = ({ setIsOpen }) => {
  const dishpatch = useDispatch();

  const { register, handleSubmit, error } = useForm({
    resolver: yupResolver(createTicketSchema),
  });

  const createTicket = (data, e) => {
    e.preventDefault();
    console.log(data);
    dishpatch(createIssue(data));
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
  };
  const onError = (error, e) => {
    console.log(error, e);
    {
      error.password
        ? toast.error(error.password.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        : "";
    }
  };
  return (
    <div className="popup__wraper">
      <form
        action=""
        className="form"
        onSubmit={handleSubmit(createTicket, onError)}
      >
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
            {...register("name")}
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
            {...register("discrption")}
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
            {...register("priority")}
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
            {...register("issueStatus")}
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
            {...register("assignedTo")}
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
            {...register("project")}
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
            {...register("version")}
          />
          <label htmlFor="version" className="form__label">
            app version
          </label>
        </div>
        <div className="createTicket__btn">
          <button className="btn btn--blue btn--large" type="submit">
            update &rarr;
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Popup;