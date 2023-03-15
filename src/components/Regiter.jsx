import register from "../assets/resister-2.jpg";

const Regiter = () => {
  return (
    <section className="register">
      <div className="register__box">
        <img src={register} alt="register" className="register__img" />
      </div>
      <div className="register__box">
        <form action="" className="form">
          <div className="u-margin-bottom-big">
            <h2 className="heading-secondery">sing up</h2>
          </div>
          <div className="form__grop">
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="form__input"
            />
            <label htmlFor="name" className="form__label">
              name
            </label>
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
          <div className="form__grop">
            <input
              type="Role"
              id="role"
              placeholder="Role"
              className="form__input"
            />
            <label htmlFor="role" className="form__label">
              role
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

export default Regiter;
