import React from 'react';
import PropType from 'prop-types';

class Filter extends React.Component {
  render() {
    const {
      filterByName,
      filterByRarity,
      filterByTrunfo,
      disableInput,
    } = this.props;
    return (
      <section className="filter">
        <h2>Filters</h2>
        <label htmlFor="namefilter">
          Card Name
          <input
            type="text"
            name="namefilter"
            id="namefilter"
            onChange={ filterByName }
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
            onChange={ filterByRarity }
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
            onChange={ filterByTrunfo }
          />
        </label>
      </section>
    );
  }
}

Filter.propTypes = {
  filterByName: PropType.func.isRequired,
  filterByRarity: PropType.func.isRequired,
  filterByTrunfo: PropType.func.isRequired,
  disableInput: PropType.bool.isRequired,
};

export default Filter;
