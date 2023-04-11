import React from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../services/localStorage";
import { useRegisterUserMutation } from "../services/userAuthApi";

const SignUp = () => {
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();

  const handleSubmitt = async (e) => {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);

    const data = {
      firstName: formdata.get("first_name"),
      lastName: formdata.get("last_name"),
      email: formdata.get("email"),
      password: formdata.get("password"),
      confirm_password: formdata.get("c_password"),
    };

    const { firstName, lastName, email, password, confirm_password } = data;

    if (firstName && lastName) {
      if (email && email.includes(".com")) {
        if (password === confirm_password) {
          const res = await registerUser(data);
          if (res.data.status === "success") {
            navigate("/home");

            setToken(res.data.token);
          } else {
            console.log(res);
          }
        } else {
          console.log("Password and confirm password doesnot match");
        }
      } else {
        console.log("email required or not valid");
      }
    } else {
      console.log("firstName and lastName both required");
    }
  };

  return (
    <div className="container w-25 my-5">
      <form id="signUpForm" onSubmit={handleSubmitt}>
        <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>

        <div className="form-floating my-3">
          <input
            type="first_name"
            className="form-control"
            name="first_name"
            id="first_name"
            placeholder="name@example.com"
          />
          <label for="floatingInput">First Name</label>
        </div>
        <div className="form-floating">
          <input
            type="last_name"
            className="form-control"
            name="last_name"
            id="last_name"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Last Nam</label>
        </div>

        <div className="form-floating my-3">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="password"
            className="form-control"
            id="c_password"
            name="c_password"
            placeholder="Password"
          />
          <label for="floatingPassword">Confirm Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
