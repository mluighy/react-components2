import React from 'react';

function Header() {
  return (
    <div className="app-container">
      <img
        className="app-container-img"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="app-container-h2">Sign in to your account</h2>
    </div>
  );
}

export default Header;
