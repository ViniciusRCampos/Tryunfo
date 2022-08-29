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
      checked,
      min,
      max,
      rows,
      cols,
      maxlength,
      wrap,
      className } = this.props;
    return (
      <label htmlFor={ id } className={ `${id} ${className} label` }>
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
          min={ min }
          max={ max }
          rows={ rows }
          cols={ cols }
          maxLength={ maxlength }
          wrap={ wrap }
          className={ className }
        />
      </label>
    );
  }
}

Input.propTypes = {
  text: PropType.string,
  type: PropType.string,
  name: PropType.string,
  id: PropType.string,
  testId: PropType.string,
  value: PropType.string,
  onChange: PropType.func,
  onClick: PropType.func,
  checked: PropType.bool,
  min: PropType.number,
  max: PropType.number,
  rows: PropType.number,
  cols: PropType.number,
  maxlength: PropType.number,
  wrap: PropType.string,
  className: PropType.string,
}.isRequired;

export default Input;
