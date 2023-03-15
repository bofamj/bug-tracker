import * as React from "react";
import { Link } from "react-router-dom";
import register from "../assets/resister-2.jpg";

const SignIn = () => {
  return (
    <section className="register">
      <div className="register__box">
        <img src={register} alt="register" className="register__img" />
      </div>
      <div className="register__box">
        <form action="" className="form">
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
              placeholder="Email adres"
              className="form__input"
            />
            <label htmlFor="email" className="form__label">
              email
            </label>
          </div>
          <div className="form__grop">
            <input
              type="Password"
              id="password"
              placeholder="Password"
              className="form__input"
            />
            <label htmlFor="password" className="form__label">
              password
            </label>
          </div>
          <div class="form__group">
            <button class="btn btn--blue">Sign Up &rarr;</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
