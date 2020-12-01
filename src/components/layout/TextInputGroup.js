import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';


 const TextInputGroup = ({
   label,
   name,
   value,
   placeholder,
   type,
   onChange,
   error
 }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type={type}
        name={name}
        className= {classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        value = {value}
        onChange = {onChange} 
      />
      {error &&  <div className='invalid-feedback' > {error} </div> }
  </div>
  );
};
 const SelectGroup = ({
   label,
   name,
   value,
   placeholder,
   id,
   onChange
 }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select 
        name={name}
        id={name}
        className="form-control
        form-control-lg"
        value = {value} 
        onChange = {onChange}>
        <option value = "Frontend">Frontend</option>
        <option value = "backend">backend</option>
      </select>
  </div>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
}
SelectGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

TextInputGroup.defaultProps = {
  type: 'text'
}

// export default TextInputGroup;
export { TextInputGroup, SelectGroup};