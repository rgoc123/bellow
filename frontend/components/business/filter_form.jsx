import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FilterForm extends React.Component {

    priceChange(price) {

    }

    render() {
      return (
        <div className="price-form">
          <ul>
            <li>
              <input onChange={this.priceChange(1)} type="checkbox" value="1" />1
            </li>
            <li>
              <input type="checkbox" value="2" />2
            </li>
          </ul>
        </div>
      );
    }

}

export default FilterForm;
