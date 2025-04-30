import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Login Page</h1>
      {/* Add basic form elements later */}
      <form>
        <div>
          <label htmlFor="username">Username/Email:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      {/* Links to Register, Forgot Password */}
    </div>
  );
};

export default LoginPage;