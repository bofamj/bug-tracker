import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//*importing files
import { createUser } from ".././features/user/userSlice";
import { userRgisterSchema } from "../validations/registrSchema";
import regiSter from "../assets/resister-2.jpg";

const Regiter = () => {
  const { users } = useSelector((store) => store.users);
  const despatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, error } = useForm({
    resolver: yupResolver(userRgisterSchema),
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

  const registerUser = (data, e) => {
    e.preventDefault();
    despatch(createUser(data));
  };

  useEffect(() => {
    if (users.token && users) {
      navigate("/dash-board");
    }
  }, [registerUser, despatch]);

  return (
    <div className="wraber-posation-center background-color">
      <section className="register">
        <div className="register__box">
          <img src={regiSter} alt="register" className="register__img" />
        </div>
        <div className="register__box">
          <form
            action=""
            className="form"
            onSubmit={handleSubmit(registerUser, onError)}
          >
            <div className="u-margin-bottom-big">
              <h2 className="heading-secondery">sing up</h2>
            </div>
            <div className="form__grop">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                className="form__input"
                {...register("name")}
              />
              <label htmlFor="name" className="form__label">
                name
              </label>
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
            <div className="form__grop">
              <input
                type="Role"
                id="role"
                name="role"
                placeholder="Role"
                className="form__input"
                {...register("role")}
              />
              <label htmlFor="role" className="form__label">
                role
              </label>
            </div>
            <div className="form__group">
              <button className="btn btn--blue" type="submit">
                Sign Up &rarr;
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Regiter;
