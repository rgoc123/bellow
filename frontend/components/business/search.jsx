import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import BusinessIndex from './business_index';

const Search = (props) => {

  return (
    <div>
      <BusinessIndex updateBounds={this.props.updateBounds}/>
    </div>
  );

};

export default Search;
