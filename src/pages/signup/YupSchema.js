import * as Yup from "yup";

export const schema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().required("Please enter your email address"),
  password: Yup.string().required("Please enter a password"),
//   confirm_password: Yup.string()
//     .required()
//     .oneOf([Yup.ref("password"), null], "password must match"),
  mobile: Yup.string().required("required"),
  address: Yup.string().required("required"),
  city: Yup.string().required("required"),
  gender: Yup.string().required("required"),
});
