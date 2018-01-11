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
        <div className="background-gray">
          <div className="content-container price-form-container">
            <h1>Browsing Restaurants in Manhattan, NY</h1>
            <div className="price-form">
            {
              [1, 2, 3, 4].map( num => (
                <div className="price-filter-checkbox">
                  <input id={`price-filter-${num}`} className="price-filter-input" onChange={this.changePrice(num)} type="checkbox" value={num} />
                  <label for={`price-filter-${num}`}>$</label>
                </div>
              ))
            }
            </div>

          </div>
        </div>
      );
    }

}

export default FilterForm;
