import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FilterForm extends React.Component {

    constructor() {
      super();
      this.state = {
        prices: {
          1: false,
          2: false,
          3: false,
          4: false
        }
      };
      this.priceChange = this.priceChange.bind(this);
    }


    priceChange() {
      let priceKeys = Object.keys(this.state.prices).filter(el => this.state.prices[el]).map(el => parseInt(el));

      this.props.updatePrices(priceKeys);
    }

    changePrice(price) {
      return () => {
        if (this.state.prices[price] === true) {
          this.state.prices[price] = false;
        } else {
          this.state.prices[price] = true;
        }
        this.priceChange();
      };
    }

    render() {

      return (
        <div className="content-container price-form-container">
          <h1>Best Restaurants</h1>
          <ul>
            <li>$
              <input className="price-filter-input" onChange={this.changePrice(1)} type="checkbox" value="1" />
            </li>
            <li>$$
              <input className="price-filter-input" onChange={this.changePrice(2)} type="checkbox" value="2" />
            </li>
            <li>$$$
              <input className="price-filter-input" onChange={this.changePrice(3)} type="checkbox" value="3" />
            </li>
            <li>$$$$
              <input className="price-filter-input" onChange={this.changePrice(4)} type="checkbox" value="4" />
            </li>
          </ul>
        </div>
      );
    }

}

export default FilterForm;
