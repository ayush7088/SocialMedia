import React, { useState } from 'react';
import './Auth.css';
import Logo2 from '../../../img/logo2.png';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo2} alt="" />
        <div className="Webname">
          <h1>Social Media</h1>
          <h6>Explore the thoughts</h6>
        </div>
      </div>

      <div className="a-right">
        <form className="infoForm authForm">
          <h3>{isSignUp ? 'Sign Up' : 'Log In'}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
              />
            </div>
          )}

          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Enter your Username"
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Enter Password"
            />
            {isSignUp && (
              <input
                type="password"
                className="infoInput"
                name="confirmpassword"
                placeholder="Confirm password"
              />
            )}
          </div>

          <div>
            <span style={{ fontSize: '12px' ,cursor : "pointer"}} onClick={()=> setIsSignUp((prev)=>!prev)}>
              {isSignUp?"Already have an account? Login!":"Don't have an account? Sign Up"}
            </span>
          </div>
          <button className="button infoButton">
            {isSignUp ? 'Sign Up' : 'Log In'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
