import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { createTicketSchema } from "../validations/registrSchema";
import { createIssue } from "../features/issue/issueSlice";

const CreateTicket = () => {
  const dishpatch = useDispatch();
  const { allUsers, users } = useSelector((state) => state.users);
  const navigate = useNavigate();

  const submitHandler = (values, actions) => {
    dishpatch(createIssue({ ...values, createdBy: users.userId }));
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
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      discrption: "",
      priority: "",
      issueStatus: "",
      assignedTo: "",
      project: "",
      version: "",
    },
    validationSchema: createTicketSchema,
    onSubmit: submitHandler,
  });

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
    <div className="register__box createTicket">
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="register__heading u-margin-bottom-big tex-wraber u-align--cinter">
          <h2 className="heading-primary u-margin-bottom-big">
            Crate a new ticket
          </h2>
        </div>

        <div className="form__grop">
          <input
            value={values.name}
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            placeholder="tiket name"
            className="form__input"
          />
          <label htmlFor="name" className="form__label ">
            tiket name
          </label>
        </div>
        <div className="form__grop">
          <textarea
            value={values.discrption}
            onChange={handleChange}
            type="text"
            id="discrption"
            name="discrption"
            placeholder="ticket discrption"
            className="form__input  "
          />
          <label htmlFor="discrption" className="form__label">
            ticket discription
          </label>
        </div>
        <div className=" createTicket__grop">
          <input
            value={values.project}
            onChange={handleChange}
            type="text"
            id="project"
            name="project"
            placeholder="app name"
            className="form__input createTicket__trepel"
          />
          <label htmlFor="project" className="form__label">
            app name
          </label>
          <select
            className="form__input createTicket__trepel form__select"
            name="priority"
            value={values.priority}
            onChange={handleChange}
            placeholder="tiket priority"
          >
            <option name="" className="form__input createTicket__trepel">
              tiket priority
            </option>
            <option name="Medium" className="form__input createTicket__trepel">
              Medium
            </option>
            <option name="low" className="form__input createTicket__trepel">
              low
            </option>
            <option name="high" className="form__input createTicket__trepel">
              high
            </option>
          </select>
        </div>
        <div className=" createTicket__grop">
          <input
            value={values.version}
            onChange={handleChange}
            type="text"
            id="version"
            name="version"
            placeholder="app version"
            className="form__input createTicket__trepel"
          />
          <label htmlFor="version" className="form__label">
            app version
          </label>
          <select
            className="form__input createTicket__trepel form__select"
            placeholder="assigned user"
            name="assignedTo"
            onChange={handleChange}
            value={values.assignedTo}
          >
            <option name="" className="form__input createTicket__trepel">
              assigned user
            </option>

            {allUsers &&
              allUsers.map((user, index) => {
                return (
                  <>
                    <option>
                      {" "}
                      <p key={index}>{user.name}</p>
                    </option>
                  </>
                );
              })}
          </select>
        </div>
        <div className="createTicket__btn">
          <button className="btn btn--blue btn--large" type="submit">
            creat &rarr;
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateTicket;
