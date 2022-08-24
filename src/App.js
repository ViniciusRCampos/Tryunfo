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
      isSaveButtonDisabled,
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
      </div>
    );
  }
}

export default App;
