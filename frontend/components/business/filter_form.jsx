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

      this.props.updateFilter("prices", priceKeys);
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
        <div className="price-form">
          <ul>
            <li>
              <input onChange={this.changePrice(1)} type="checkbox" value="1" />1
            </li>
            <li>
              <input onChange={this.changePrice(2)} type="checkbox" value="2" />2
            </li>
          </ul>
        </div>
      );
    }

}

export default FilterForm;
