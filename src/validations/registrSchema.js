import * as Yup from "yup";

export const userRgisterSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email("Not a proper email").required(),
  password: Yup.string().min(6).max(30).required(),
  role: Yup.string(),
});
export const userLogInSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(30).required(),
});
