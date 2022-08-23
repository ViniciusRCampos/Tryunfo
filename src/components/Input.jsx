import React from 'react';
import PropType from 'prop-types';

class Input extends React.Component {
  render() {
    const { text, type, name, id, testId } = this.props;
    console.log(testId);
    return (
      <label htmlFor={ id }>
        {text}
        <input type={ type } name={ name } id={ id } data-testid={ testId } />
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
};

export default Input;
