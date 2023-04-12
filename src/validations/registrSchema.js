import * as Yup from "yup";

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
export const createTicketSchema = Yup.object().shape({
  name: Yup.string().min(6).max(50).required(),
  discrption: Yup.string().min(6).max(300).required(),
  priority: Yup.string().required(),
  issueStatus: Yup.string().required(),
  assignedTo: Yup.string()
    .required()
    .oneOf(["lulu", "mustafa", "mohamed jaber", "alkabash"]),
  project: Yup.string().required(),
});
