import React from 'react';
import PropType from 'prop-types';

class Card extends React.Component {
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
    } = this.props;
    return (
      <section
        className={ `card ${cardRare} ${cardTrunfo ? 'super-trunfo' : ''} ` }
      >
        <div className="cards">
          <h2 data-testid="name-card" className="name-card">{ cardName }</h2>
          <img
            className="image-card"
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
            description=""
          />
          <p className="rare-card" data-testid="rare-card">{cardRare}</p>
          <p
            className="description-card"
            data-testid="description-card"
          >
            {cardDescription}
          </p>
          <div className="stats">
            <p data-testid="attr1-card" className="atk">{cardAttr1}</p>
            /
            <p data-testid="attr2-card" className="res">{cardAttr2}</p>
            <p data-testid="attr3-card" className="hidden">{cardAttr3}</p>
          </div>
          {cardTrunfo && <p data-testid="trunfo-card" className="hidden">Super Trunfo</p>}
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.number.isRequired,
  cardAttr2: PropType.number.isRequired,
  cardAttr3: PropType.number.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
};

export default Card;
