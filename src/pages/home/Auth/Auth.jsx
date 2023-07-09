import React from 'react';
import './Auth.css';
import Logo2 from '../../../img/logo2.png'

const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo2} alt="" />
                <div className="Webname">
                    <h1>Social Media</h1>
                    <h6>Explore the thoughts</h6>
                </div>
            </div>

            {/* <SignUp /> */}
            <LogIn />

        </div>
    )
}

function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }

function SignUp() {
    return (
        <div className="a-right">
            <form className="infoForm authForm">

                <h3>Signup</h3>

                <div>
                    <input type="text"
                        placeholder='First Name'
                        className='infoInput'
                        name='firstname' />

                    <input type="text"
                        placeholder='Last Name'
                        className='infoInput'
                        name='lastname' />
                </div>
                <div>
                    <input type="text"
                        className="infoInput"
                        name='username'
                        placeholder='Enter your Username' />
                </div>

                <div>
                    <input type="text"
                        className="infoInput"
                        name='password'
                        placeholder='Enter Password'
                    />
                    <input type="text"
                        className="infoInput"
                        name='confirmpassword'
                        placeholder='Confirm password'
                    />
                </div>

                <div>
                    <span style={{ fontSize: '12px' }}>Already have an account? Login!</span>
                </div>
                <button className='button infoButton'>Signup</button>
            </form>
        </div>
    )
}

export default Auth;