import React from 'react';
import PropTypes from 'prop-types';

 const Header =(props) => {
   const {fellows} = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0 ">
      <div className="container">
        <a href="/" className="navbar-brand">
          {fellows}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="https://pacetimesheet.netlify.app/new_ui_env/index.html" className="nav-link"target ="_blank">Pace</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps ={
  fellows: 'my Team'
}

Header.propTypes = {
  fellows: PropTypes.string.isRequired
};

export default Header;