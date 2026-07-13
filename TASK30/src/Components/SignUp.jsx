import React from "react";

const SignUp = () => {
  return (
    <>
      {/* <div className="mainbox">
        <h1>SignUp</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
          <label htmlFor="signupemail">Email:</label>
          <input type="text" id="signupemail" />
          <label htmlFor="siguppass">Password:</label>
          <input type="password" id="signuppass" />
          <button>Sign Up</button>
        </div>
      </div> */}
      <div className="mainbox">
        <h1>🌍 Join Travel Explorer</h1>
        <p>Create your account and start exploring amazing destinations.</p>

        <div>
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name" />

          <label htmlFor="signupemail">Email Address</label>
          <input type="email" id="signupemail" placeholder="Enter your email" />

          <label htmlFor="signuppass">Password</label>
          <input
            type="password"
            id="signuppass"
            placeholder="Create a password"
          />

          <button>Create Account</button>

          <small>
            Already have an account? <a href="/login">Login here</a>
          </small>
        </div>
      </div>
    </>
  );
};

export default SignUp;
