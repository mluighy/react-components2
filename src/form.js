import React from 'react';

function Form() {
  return (
    <div className="app-container-div">
      <form className="app-container-form" action="#" method="POST">
        <div>
          <label htmlFor="email" className="app-container-label-email">
            Email address
          </label>
          <div className="app-container-form-div">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="app-container-form-email"
            />
          </div>
        </div>

        <div>
          <div className="app-container-div-div">
            <label htmlFor="password" className="app-container-label-password">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="app-container-forgot">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="app-container-form-div">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="app-container-form-email"
            />
          </div>
        </div>

        <div>
          <button type="submit" className="app-container-submit">
            Sign in
          </button>
        </div>
      </form>

      <p className="app-container-member">
        Not a member?{' '}
        <a href="#" className="app-container-member-a">
          Start a 14 day free trial
        </a>
      </p>
    </div>
  );
}

export default Form;
