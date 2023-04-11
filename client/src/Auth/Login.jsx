import React from "react";
import { useNavigate } from "react-router-dom";
import { setToken } from "../services/localStorage";
import { useLoginUserMutation } from "../services/userAuthApi";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const loginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const { email, password } = loginData;

    if (!email && !password) {
      console.log("email or password is required");
    } else {
      const res = await loginUser(loginData);
      navigate("/home");
      setToken(res.data.token);
      // console.log(res);
    }
  };

  return (
    <div className="container w-25 my-5">
      <h1 className="h3 mb-3 fw-normal">Please LogIn</h1>
      <form id="loginForm" onSubmit={handleSubmit}>
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
        <button className="w-100 btn btn-lg btn-primary my-4" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
