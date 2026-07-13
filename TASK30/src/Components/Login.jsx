import React from "react";

const Login = () => {
  return (
    <>
      {/* <div className="mainbox">
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
          <button>Login</button>
        </div>
      </div> */}
      <div className="mainbox">
        <h1>✈️ Welcome Back</h1>
        <p>Sign in to continue planning your next adventure.</p>

        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
          />

          <button>Login</button>

          <small>
            Don't have an account? <a href="#">Create one</a>
          </small>
        </div>
      </div>
    </>
  );
};

export default Login;
