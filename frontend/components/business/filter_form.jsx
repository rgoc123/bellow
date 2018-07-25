import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

class FilterForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        prices: {1: false, 2: false, 3: false, 4: false},
        openNow: false,
        delivers: false,
        takeout: false,
        openNowStyle: {},
        deliversStyle: {},
        takeoutStyle: {}
      };
      this.priceChange = this.priceChange.bind(this);
      this.openNowChange = this.openNowChange.bind(this);
      this.deliversChange = this.deliversChange.bind(this);
      this.takeoutChange = this.takeoutChange.bind(this);
      this.clearFilters = this.clearFilters.bind(this);
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

    openNowChange() {
      if (this.state.openNow === false) {
        this.state.openNow = true;
        this.setState({
          openNowStyle: {
            'backgroundColor': '#c4f3a4',
            'border': '1px solid #41a700',
            'color': '#348c42'
          }
        });
      } else {
        this.state.openNow = false;
        this.setState({openNowStyle: {}});
      }
      this.props.updateOpenNow(this.state.openNow);
    }

    deliversChange() {
      if (this.state.delivers === false) {
        this.state.delivers = true;
        this.setState({
          deliversStyle: {
            'backgroundColor': '#c4f3a4',
            'border': '1px solid #41a700',
            'color': '#348c42'
          }
        });
      } else {
        this.state.delivers = false;
        this.setState({deliversStyle: {}});
      }
      this.props.updateDelivers(this.state.delivers);
    }

    takeoutChange() {
      if (this.state.takeout === false) {
        this.state.takeout = true;
        this.setState({
          takeoutStyle: {
            'backgroundColor': '#c4f3a4',
            'border': '1px solid #41a700',
            'color': '#348c42'
          }
        });
      } else {
        this.state.takeout = false;
        this.setState({takeoutStyle: {}});
      }
      this.props.updateTakeout(this.state.takeout);
    }

    clearFilters() {
      this.props.clearFilters();
      let newState = Object.assign({}, this.state);
      newState['prices'] = {1: false, 2: false, 3: false, 4: false};
      newState['openNowStyle'] = {};
      newState['deliversStyle'] = {};
      newState['takeoutStyle'] = {};
      newState['openNow'] = false;
      newState['delivers'] = false;
      newState['takeout'] = false;
      [1, 2, 3].forEach(price => {
        if (document.getElementById(`price-filter-${price + 1}`) && price <= 3) {
            document.getElementById(`price-filter-${price + 1}`).style.borderLeft = "";
        }
      });
      this.setState(newState);
    }

    componentDidMount() {
      this.setState({
        openNow: this.props.filters.openDelivers.openNow,
        delivers: this.props.filters.openDelivers.delivers,
        takeout: this.props.filters.openDelivers.takeout
      });
      if (this.props.filters.openDelivers.openNow === true) this.setState({
        openNowStyle: {
          'backgroundColor': '#c4f3a4',
          'border': '1px solid #41a700',
          'color': '#348c42'
        }
      });
      if (this.props.filters.openDelivers.delivers === true) this.setState({
        deliversStyle: {
          'backgroundColor': '#c4f3a4',
          'border': '1px solid #41a700',
          'color': '#348c42'
        }
      });
      if (this.props.filters.openDelivers.takeout === true) this.setState({
        takeoutStyle: {
          'backgroundColor': '#c4f3a4',
          'border': '1px solid #41a700',
          'color': '#348c42'
        }
      });
      if (this.props.filters.prices.length > 0) {
        let newPrice = Object.assign({}, this.state.prices);
        this.props.filters.prices.forEach(price => {
          newPrice[price] = true;
          if (document.getElementById(`price-filter-${price + 1}`) && price <= 3) {
            if (newPrice[price] === true) {
              document.getElementById(`price-filter-${price + 1}`).style.borderLeft = "1px solid #41a700";
            } else {
              document.getElementById(`price-filter-${price + 1}`).style.borderLeft = "";
            }
          }
        });
        this.setState({
          prices: newPrice
        });
      }
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
                  <input id={`price-filter-${num}`}
                    className="price-filter-input"
                    onChange={this.changePriceAndBorder(num)}
                    type="checkbox"
                    value={num}
                    checked={this.state.prices[num]} />
                  <label htmlFor={`price-filter-${num}`}>{this.dollaSignChooser(num)}</label>
                </div>
              ))
            }
              <div className="filter-button"
              id="open-now"
              onClick={this.openNowChange}
              style={this.state.openNowStyle}>
                <input type="button"/>
                <label>Open Now</label>
              </div>
              <div className="filter-button"
              id="delivers"
              onClick={this.deliversChange}
              style={this.state.deliversStyle}>
                <input type="button"/>
                <label>Order Delivery</label>
              </div>
              <div className="filter-button"
              id="take-out"
              onClick={this.takeoutChange}
              style={this.state.takeoutStyle}>
                <input type="button"/>
                <label>Order Takeout</label>
              </div>
              <div className="filter-button"
              id="take-out"
              onClick={this.clearFilters} >
                <input type="button"/>
                <label>Clear Filters</label>
              </div>
            </div>
          </div>
        </div>
      );
    }

}

export default FilterForm;
