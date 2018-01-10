import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import BusinessIndexContainer from './business_index_container';
import FilterForm from './filter_form';

class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <FilterForm filters={this.props.filters} updateFilter={this.props.updateFilter} />
        <div>
          <BusinessIndexContainer filters={this.props.filters} updateBounds={this.props.updateBounds}/>
        </div>
      </div>
    );
  }

}

export default Search;
