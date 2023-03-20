import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//*importing files
import { createUser } from ".././features/user/userSlice";
import registerImg from "../assets/resister-2.jpg";
import { userLogInSchema } from "../validations/registrSchema";

const SignIn = () => {
  const { users } = useSelector((store) => store.users);
  const despatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, error } = useForm({
    resolver: yupResolver(userLogInSchema),
  });

  const logInUser = (data, e) => {
    e.preventDefault();
    despatch(createUser(data));
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

  useEffect(() => {
    console.log(users);
    if (despatch && logInUser) {
      users.token
        ? toast.success("you have successfully logged in", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        : toast.error(users, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
    }
    if (users.token && users) {
      navigate("/sign-up");
    }
  }, [despatch, logInUser]);

  return (
    <section className="register">
      <div className="register__box">
        <img src={registerImg} alt="register" className="register__img" />
      </div>
      <div className="register__box">
        <form
          action=""
          className="form"
          onSubmit={handleSubmit(logInUser, onError)}
        >
          <div className="register__heading u-margin-bottom-big tex-wraber">
            <h2 className="heading-secondery">sing in</h2>
            <button className="btn btn-smull">
              <Link to="/sign-up" className="link">
                Sign Up
              </Link>
            </button>
          </div>

          <div className="form__grop">
            <input
              type="Email"
              id="email"
              name="email"
              placeholder="Email adres"
              className="form__input"
              {...register("email")}
            />
            <label htmlFor="email" className="form__label">
              email
            </label>
          </div>
          <div className="form__grop">
            <p>{}</p>
            <input
              type="Password"
              id="password"
              name="password"
              placeholder="Password"
              className="form__input"
              {...register("password")}
            />
            <label htmlFor="password" className="form__label">
              password
            </label>
          </div>
          <div className="form__group">
            <button className="btn btn--blue" type="submit">
              Sign In &rarr;
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SignIn;