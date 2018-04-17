import React from 'react';
import ReactDOM from 'react-dom';
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

    dollaSignChooser(num) {
      if (num === 1) {
        return "$";
      } else if (num === 2) {
        return "$$";
      } else if (num === 3) {
        return "$$$";
      } else {
        return "$$$$";
      }
    }

    priceChange() {
      let priceKeys = Object.keys(this.state.prices).filter(el =>
        this.state.prices[el]).map(el => parseInt(el));
      this.props.updatePrices(priceKeys);
    }

    changePrice(price) {
      if (this.state.prices[price] === true) {
        this.state.prices[price] = false;
      } else {
        this.state.prices[price] = true;
      }
      this.priceChange();
    }

    rightBorderStyle(price) {
      if (document.getElementById(`price-filter-${price + 1}`) && price <= 3) {
        if (this.state.prices[price] === true) {
          document.getElementById(`price-filter-${price + 1}`).style.borderLeft = "1px solid #41a700";
        } else {
          document.getElementById(`price-filter-${price + 1}`).style.borderLeft = "";
        }
      }
    }

    changePriceAndBorder(price) {
      return () => {
        this.changePrice(price);
        this.rightBorderStyle(price);
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
                <div className="price-filter-checkbox" key={num}>
                  <input id={`price-filter-${num}`} className="price-filter-input" onChange={this.changePriceAndBorder(num)} type="checkbox" value={num} />
                  <label htmlFor={`price-filter-${num}`}>{this.dollaSignChooser(num)}</label>
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
