import {object, string } from "yup";

export const NavItems = ["New Drops 🔥", "Men", "Women"]

export const KEYCHAIN = "kicks_key"

export const GENDERS = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Other",
    label: "Other",
  },
];

export const allowAlphabets = (value = "") => {
    return value?.replace(/[^a-zA-Z]/gi, "");
};

export const LOGIN_DETAILS = {
  initialValue: {
    email: "",
    password: ""
  },
  validationSchema: object().shape({
    email: string().required("Required").email("Invalid Email").nullable(),
    password: string()
    .required("Required")
    .nullable(),
  }),
};

export const REGISTER_DETAILS = {
    initialValue: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "Male",
      password: ""
    },
    validationSchema: object().shape({
      email: string().required("Required").email("Invalid Email").nullable(),
      firstName: string().required("Required").nullable(),
      lastName: string().required("Required").nullable(),
      gender: string().required("Required").nullable(),
      password: string()
      .required("Required")
      .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Invalid Password")
      .nullable(),
    }),
};

export const CHECKOUT_DETAILS = {
  initialValue: {
    firstName: "",
    lastName: "",
    email: "",
    doorNo: "",
    landMark: "",
    pincode: "",
    number: ""
  },
  validationSchema: object().shape({
    email: string().required("Required").email("Invalid Email").nullable(),
    firstName: string().required("Required").nullable(),
    lastName: string().required("Required").nullable(),
    streetAddress: string().required("Required").nullable(),
    landMark: string().required("Required").nullable(),
    pincode: string()
    .required("Required")
    .matches(/^\d{6}$/, "Invalid Pincode")
    .nullable(),  
    number: string().required("Required").nullable(),
  }),
};