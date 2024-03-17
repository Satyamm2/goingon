import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { schema } from "./YupSchema";

const initialValues = {
  name: "",
  email: "",
  password: "",
  mobile: "",
  address: "",
  city: "",
  gender: "",
};

function Signup({ onSignUp }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    city: "",
    gender: "",
  });

  const [registrationStatus, setRegistrationStatus] = useState(null);

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: schema,
      onSubmit: async (values, action) => {
        try {
          const response = await axios.post(
            "http://localhost:3001/user/save",
            values
          );
          if (response) {
            console.log("Registration Successful");
            setRegistrationStatus("Successfully registered");
            action.resetForm();
          } else {
            console.log("Registration failed");
            setRegistrationStatus("Registration failed");
          }
        } catch (error) {
          console.log("Error", error);
          setRegistrationStatus("Registration failed");
        }
        // console.log("values", values);
        // action.resetForm()
      },
    });

  return (
    <>
      <div className="flex bg-transparent mt-20 items-center justify-center">
        <div className="flex flex-col bg-white p-8 rounded shadow-md w-96 ">
          <h2 className="text-2xl font-semibold mb-6">SignUp</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="sam"
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <span className="text-red-600">{errors.name}</span>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="xyz@gmail.com"
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <span className="text-red-600">{errors.email}</span>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="********"
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <span className="text-red-600">{errors.password}</span>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Mobile:
              </label>
              <input
                type="text"
                name="mobile"
                value={values.mobile}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="9999999999"
                onBlur={handleBlur}
              />
              {errors.mobile && touched.mobile ? (
                <span className="text-red-600">{errors.mobile}</span>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Address:
              </label>
              <textarea
                name="address"
                value={values.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                onBlur={handleBlur}
              />
              {errors.address && touched.address ? (
                <span className="text-red-600">{errors.address}</span>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                City:
              </label>
              <input
                type="text"
                name="city"
                value={values.city}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="new delhi"
                onBlur={handleBlur}
              />
              {errors.city && touched.city ? (
                <span className="text-red-600">{errors.city}</span>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Gender:
              </label>
              <input
                type="text"
                name="gender"
                value={values.gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="male/female/others"
                onBlur={handleBlur}
              />
              {errors.gender && touched.gender ? (
                <span className="text-red-600">{errors.gender}</span>
              ) : null}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              SignUp
            </button>

            {registrationStatus && (
              <p
                className={`text-center mt-4 ${
                  registrationStatus === "Successfully registered"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {registrationStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
