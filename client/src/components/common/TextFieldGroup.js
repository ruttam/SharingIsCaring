import React from 'react'

const TextFieldGroup = ({ placeholder, field, value, error, type, onChange, checkEmailExists }) => {
  return (
    <div>
      <input
        type={type}
        name={field}
        value={value}
        onChange={onChange}
        onBlur={checkEmailExists}
        className="form-control"
        placeholder={placeholder}
      />
    </div>
  );
}

TextFieldGroup.propTypes = {
  placeholder: React.PropTypes.string,
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  checkEmailExists: React.PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
