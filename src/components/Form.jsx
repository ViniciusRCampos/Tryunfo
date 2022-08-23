import React from 'react';
import Input from './Input';

class Form extends React.Component {
  render() {
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
          />
          <Input
            type="textarea"
            name="description"
            id="description"
            testId="description-input"
            text="Description:"
          />
          <Input
            type="number"
            name="attribute1"
            id="att1"
            testId="attr1-input"
            text="Attribute 1:"
          />
          <Input
            type="number"
            name="attribute2"
            id="att2"
            testId="attr2-input"
            text="Attribute 2:"
          />
          <Input
            type="number"
            name="attribute3"
            id="att3"
            testId="attr3-input"
            text="Attribute 3:"
          />
          <Input
            type="text"
            name="url"
            id="urlImage"
            testId="image-input"
            text="Card Image(url):"
          />
          <label htmlFor="rarity">
            Rarity:
            <select name="rarity" id="rarity" data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <Input
            type="checkbox"
            name="trunfo"
            id="trunfo"
            testId="trunfo-input"
            text="Super Trunfo:"
          />
          <button type="submit" id="addCard" data-testid="save-button">Salvar</button>
        </form>
      </main>
    );
  }
}

export default Form;
