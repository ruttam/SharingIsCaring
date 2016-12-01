import React from 'react'

const TextFieldGroup = ({placeholder, field, divStyle, value, error, type, onChange, checkEmailExists}) => {
  return(
    <div>
      <input
      value={value}
      onChange={onChange}
      className="form-control"
      style = {divStyle}
      type={type}
      name={field}
      placeholder={placeholder}
      />
      {error && <span><h5>{error}</h5></span>}
    </div>
  );
}

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  divStyle: React.PropTypes.object,
  error: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  checkEmailExists: React.PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
