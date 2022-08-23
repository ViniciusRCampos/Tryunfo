import React from 'react';
import PropType from 'prop-types';

class Input extends React.Component {
  render() {
    const {
      text,
      type,
      name,
      id,
      testId,
      value,
      onChange,
      onClick,
      checked } = this.props;
    return (
      <label htmlFor={ id }>
        {text}
        <input
          type={ type }
          name={ name }
          id={ id }
          data-testid={ testId }
          value={ value }
          checked={ checked }
          onChange={ onChange }
          onClick={ onClick }
        />
      </label>
    );
  }
}

Input.propTypes = {
  text: PropType.string.isRequired,
  type: PropType.string.isRequired,
  name: PropType.string.isRequired,
  id: PropType.string.isRequired,
  testId: PropType.string.isRequired,
  value: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  onClick: PropType.func.isRequired,
  checked: PropType.bool.isRequired,
};

export default Input;
