import * as Yup from "yup";
//const emailValidation =

export const userRgisterSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().min(6).max(30).required(),
  role: Yup.string(),
});
export const userLogInSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").required(),
  password: Yup.string().min(6).max(30).required(),
});
