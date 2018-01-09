import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FilterForm extends React.Component {

    render() {
      return (
        <div>
          <ul>
            <li>
              <input type="radio" value="1" />1
            </li>
            <li>
              <input type="radio" value="2" />2
            </li>
          </ul>
        </div>
      );
    }

}

export default FilterForm;
