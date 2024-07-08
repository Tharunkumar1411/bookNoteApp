import {object, string } from "yup";

export const NavItems = ["New Drops 🔥", "Men", "Women"]

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