import React from 'react';
import PropType from 'prop-types';
import Input from './Input';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      //   hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <main>
        <h1>Add new card</h1>
        <form>
          <Input
            type="text"
            name="cardName"
            id="cardName"
            testId="name-input"
            text="New Card:"
            value={ cardName }
            onChange={ onInputChange }
          />
          <Input
            type="textarea"
            name="cardDescription"
            id="description"
            testId="description-input"
            text="Description:"
            value={ cardDescription }
            onChange={ onInputChange }
          />
          <Input
            type="number"
            name="cardAttr1"
            id="att1"
            testId="attr1-input"
            text="Attribute 1:"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
          <Input
            type="number"
            name="cardAttr2"
            id="att2"
            testId="attr2-input"
            text="Attribute 2:"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
          <Input
            type="number"
            name="cardAttr3"
            id="att3"
            testId="attr3-input"
            text="Attribute 3:"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
          <Input
            type="text"
            name="cardImage"
            id="urlImage"
            testId="image-input"
            text="Card Image(url):"
            value={ cardImage }
            onChange={ onInputChange }
          />
          <label htmlFor="rarity">
            Rarity:
            <select
              name="cardRare"
              id="rarity"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <Input
            type="checkbox"
            name="cardTrunfo"
            id="trunfo"
            testId="trunfo-input"
            text="Super Trunfo:"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          <button
            type="submit"
            id="addCard"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </main>
    );
  }
}

Form.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.number.isRequired,
  cardAttr2: PropType.number.isRequired,
  cardAttr3: PropType.number.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  // hasTrunfo:
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};

export default Form;
