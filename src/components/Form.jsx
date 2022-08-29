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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <section className="form">
        <form className="cardform">
          <Input
            type="text"
            name="cardName"
            id="cardName"
            testId="name-input"
            text="New Card:"
            value={ cardName }
            onChange={ onInputChange }
            className="cardName input"
            maxlength="35"
          />
          <Input
            type="text"
            name="cardImage"
            id="urlImage"
            testId="image-input"
            text="Card Image(url):"
            value={ cardImage }
            onChange={ onInputChange }
            className="cardImage input"
            placeholder=""
          />
          <label htmlFor="description " className="description">
            Description:
            <textarea
              name="cardDescription"
              id="description"
              data-testid="description-input"
              text="Description:"
              value={ cardDescription }
              onChange={ onInputChange }
              className="cardDescription input label"
              maxLength="162"
              rows="3"
              cols="5"
              wrap="hard"
            />
          </label>
          <Input
            type="number"
            name="cardAttr1"
            id="att1"
            testId="attr1-input"
            text="Power:"
            value={ cardAttr1 }
            onChange={ onInputChange }
            className="cardAttr1 input"
            min={ 0 }
            max={ 90 }
          />
          <Input
            type="number"
            name="cardAttr2"
            id="att2"
            testId="attr2-input"
            text="Toughness:"
            value={ cardAttr2 }
            onChange={ onInputChange }
            min={ 0 }
            max={ 90 }
            className="cardAttr2 input"
          />
          <Input
            type="number"
            name="cardAttr3"
            id="att3"
            testId="attr3-input"
            text="Attribute 3:"
            value={ cardAttr3 }
            onChange={ onInputChange }
            min={ 0 }
            max={ 90 }
            className="cardAttr3 input"
          />
          <label htmlFor="rarity" className="input label">
            Rarity:
            <select
              name="cardRare"
              id="rarity"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
              className="input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Rare</option>
              <option value="muito raro">Legendary</option>
            </select>
          </label>
          { hasTrunfo ? (<p>Você já tem um Super Trunfo em seu baralho</p>
          ) : (<Input
            type="checkbox"
            name="cardTrunfo"
            id="trunfo"
            testId="trunfo-input"
            text="Unique:"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            className="input"
          />)}
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
      </section>
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
  hasTrunfo: PropType.func.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};

export default Form;
