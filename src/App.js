import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: 0,
    cardAttr2: 0,
    cardAttr3: 0,
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
    hasTrunfo: false,
    savedCards: [],
  };

  verifyStringState = () => {
    const { cardName, cardDescription, cardImage } = this.state;
    return (
      !!(cardName !== ''
        && cardDescription !== ''
        && cardImage !== ''));
  };

  verifyNumber = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const Attribute1 = Number(cardAttr1);
    const Attribute2 = Number(cardAttr2);
    const Attribute3 = Number(cardAttr3);
    const totalAttribute = Attribute1 + Attribute2 + Attribute3;
    const totalPoints = 210;
    const attributeCap = 90;
    return (
      !!(Attribute1 >= 0 && Attribute1 <= attributeCap
        && Attribute2 >= 0 && Attribute2 <= attributeCap
        && Attribute3 >= 0 && Attribute3 <= attributeCap
        && totalAttribute <= totalPoints));
  };

  buttonStatus = () => {
    if (this.verifyStringState() === true
        && this.verifyNumber() === true) {
      return this.setState({ isSaveButtonDisabled: false });
    }
    return this.setState({ isSaveButtonDisabled: true });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => this.buttonStatus());
  };

  addCard = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    const insert = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((before) => ({
      savedCards: [...before.savedCards, insert] }), () => this.resetState());
  };

  verifyTrunfo = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo === true) return this.setState({ hasTrunfo: true });
  };

  resetState = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  };

  saveButton = (event) => {
    event.preventDefault();
    this.verifyTrunfo();
    this.addCard();
  };

  deleteCard = (event) => {
    const { savedCards } = this.state;
    const position = savedCards.indexOf(
      savedCards.find((e) => e.cardName === event.target.name),
    );
    if (savedCards[position].cardTrunfo === true) {
      this.setState({ hasTrunfo: false });
    }
    savedCards.splice(position, 1);
    this.setState({ savedCards });
  };

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
      savedCards,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.saveButton }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        { savedCards.map((cards) => (
          <div key={ cards.name }>
            <Card
              cardName={ cards.cardName }
              cardDescription={ cards.cardDescription }
              cardAttr1={ cards.cardAttr1 }
              cardAttr2={ cards.cardAttr2 }
              cardAttr3={ cards.cardAttr3 }
              cardImage={ cards.cardImage }
              cardRare={ cards.cardRare }
              cardTrunfo={ cards.cardTrunfo }
            />
            <button
              type="button"
              data-testid="delete-button"
              onClick={ this.deleteCard }
              name={ cards.cardName }
            >
              Delete Card
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
