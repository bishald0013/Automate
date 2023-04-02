import React from "react";

const SignUp = () => {

    const handleSubmitt = async (e) => {
        e.preventDefault()

        const formdata = new FormData(e.currentTarget)

        const data = {
            firstName : formdata.get('first_name'),
            lastName: formdata.get('last_name'),
            email: formdata.get('email'),
            password: formdata.get('password'),
            confirm_password: formdata.get('c_password')
        }

        const {firstName, lastName, email, password, confirm_password} = data

        if(firstName && lastName){
            if(email && email.includes('.com')){
                if(password === confirm_password){
                    console.log('Success')
                }else{
                    console.log('Password and confirm password doesnot match')
                }
            }else{
                console.log("email required or not valid")
            }
        }else{
            console.log('firstName and lastName both required')
        }

    }

    
  return (
    <div className="container w-25 my-5">
      <form id="signUpForm" onSubmit={handleSubmitt} >
        <h1 class="h3 mb-3 fw-normal">Please Sign Up</h1>

        <div class="form-floating my-3">
          <input
            type="first_name"
            class="form-control"
            name="first_name"
            id="first_name"
            placeholder="name@example.com"
          />
          <label for="floatingInput">First Name</label>
        </div>
        <div class="form-floating">
          <input
            type="last_name"
            class="form-control"
            name="last_name"
            id="last_name"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Last Nam</label>
        </div>

        <div class="form-floating my-3">
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            name="password"
            id="password"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div class="form-floating my-3">
          <input
            type="password"
            class="form-control"
            id="c_password"
            name="c_password"
            placeholder="Password"
          />
          <label for="floatingPassword">Confirm Password</label>
        </div>

        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Sign Up
        </button>
        <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
      </form>
    </div>
  );
};

export default SignUp;
