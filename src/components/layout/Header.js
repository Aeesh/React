import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

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
              <Link to="https://pacetimesheet.netlify.app/new_ui_env/index.html" className="nav-link"target ="_blank">Pace</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact/add" className="nav-link">
                <i className="fas fa-plus" />
                Add</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
              <i className="fas fa-question" />
                About</Link>
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