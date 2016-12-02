import React from 'react'

const TextFieldGroup = ({ placeholder, field, divStyle, value, error, type, onChange, checkEmailExists }) => {
  return (
    <div>
      <input
        type={type}
        name={field}
        value={value}
        onChange={onChange}
        className="form-control"
        style = {divStyle}
        placeholder={placeholder}
      />
      {error && <span>{error}</span>}
    </div>
  );
}

TextFieldGroup.propTypes = {
  placeholder: React.PropTypes.string.isRequired,
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  divStyle: React.PropTypes.object,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  checkEmailExists: React.PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
