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
    cardsInFilter: [],
    disableInput: false,
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
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo,
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
    this.setState((before) => (
      { savedCards: [...before.savedCards, insert],
        cardsInFilter: [...before.cardsInFilter, insert] }), () => this.resetState());
  };

  verifyTrunfo = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo === true) return this.setState({ hasTrunfo: true });
  };

  filterByName = ({ target }) => {
    const { savedCards } = this.state;
    const { value } = target;
    const cardListByName = savedCards.filter(
      (card) => card.cardName.includes(value),
    );
    this.setState({ cardsInFilter: cardListByName });
  };

  filterByRarity = ({ target }) => {
    const { savedCards } = this.state;
    const { value } = target;
    const cardListByRarity = savedCards.filter(
      (card) => ((value === 'todas')
        ? savedCards
        : card.cardRare === value
      ),
    );
    this.setState({ cardsInFilter: cardListByRarity });
  };

  filterByTrunfo = ({ target }) => {
    const { checked } = target;
    const { savedCards } = this.state;
    if (checked === true) {
      const cardTrunfo = savedCards.filter(
        (card) => card.cardTrunfo === true,
      );
      return this.setState(
        {
          cardsInFilter: cardTrunfo,
          disableInput: true,
        },
      );
    }
    this.setState({ cardsInFilter: savedCards, disableInput: false });
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

  findCard = (event, list) => {
    const position = list.indexOf(
      list.find((e) => e.cardName === event.target.name),
    );
    console.log(list[position].cardTrunfo);
    const { cardTrunfo } = list[position];
    if (cardTrunfo === true) {
      this.setState({ hasTrunfo: false });
    }
    list.splice(list[position], 1);
  };

  deleteCard = (event) => {
    const { savedCards, cardsInFilter } = this.state;
    this.findCard(event, savedCards);
    this.findCard(event, cardsInFilter);
    this.setState({ cardsInFilter: savedCards });
  };

  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, cardsInFilter,
      disableInput,
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
          { ...this.state }
        />
        <section className="filter">
          <h2>Filters</h2>
          <label htmlFor="namefilter">
            Card Name
            <input
              type="text"
              name="namefilter"
              id="namefilter"
              onChange={ this.filterByName }
              disabled={ disableInput }
              data-testid="name-filter"
            />
          </label>
          <label htmlFor="rarityfilter">
            Rarity:
            <select
              name="rarityfilter"
              id="rarityfilter"
              data-testid="rare-filter"
              disabled={ disableInput }
              onChange={ this.filterByRarity }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfofilter">
            Super Trunfo:
            <input
              type="checkbox"
              name="trunfofilter"
              id="trunfofilter"
              data-testid="trunfo-filter"
              onChange={ this.filterByTrunfo }
            />
          </label>
        </section>
        { cardsInFilter.map((cards) => (
          <div key={ cards.name }>
            <Card
              { ...cards }
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
