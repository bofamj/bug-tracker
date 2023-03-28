import React from "react";
import { Link, useNavigate } from "react-router-dom";
const CreateTicket = () => {
  return (
    <div className="register__box createTicket">
      <form action="" className="form">
        <div className="register__heading u-margin-bottom-big tex-wraber u-align--cinter">
          <h2 className="heading-primary u-margin-bottom-big">
            Crate a new ticket
          </h2>
        </div>

        <div className="form__grop">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="tiket name"
            className="form__input"
          />
          <label htmlFor="title" className="form__label">
            tiket name
          </label>
        </div>
        <div className="form__grop">
          <textarea
            type="text"
            id="discription"
            name="discription"
            placeholder="ticket discription"
            className="form__input"
          />
          <label htmlFor="discription" className="form__label">
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
          />
          <label htmlFor="priority" className="form__label">
            priority
          </label>
          <input
            type="text"
            id="status"
            name="status"
            placeholder="tiket status"
            className="form__input  createTicket__dubel"
          />
          <label htmlFor="status" className="form__label">
            tiket status
          </label>
        </div>
        <div className=" createTicket__grop">
          <input
            type="text"
            id="assigned"
            name="assigned"
            placeholder="assigned user"
            className="form__input createTicket__trepel"
          />
          <label htmlFor="assigned" className="form__label">
            priority
          </label>
          <input
            type="text"
            id="app"
            name="app"
            placeholder="app name"
            className="form__input createTicket__trepel"
          />
          <label htmlFor="app" className="form__label">
            app name
          </label>
          <input
            type="text"
            id="version"
            name="version"
            placeholder="app version"
            className="form__input createTicket__trepel"
          />
          <label htmlFor="version" className="form__label">
            app version
          </label>
        </div>
        <div className="createTicket__btn">
          <button className="btn btn--blue btn--large" type="submit">
            creat &rarr;
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTicket;
