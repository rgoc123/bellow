import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { updateFilter } from '../../actions/filter_actions';

class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.props.updateSearchInput(this.state.searchInput);
    this.props.props.history.push('/search');
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {

    return (
      <div className="search-form-container">
        <form onSubmit={this.handleSubmit}>
          <input
            className="search-biz-input"
            type="text"
            value={this.state.searchInput}
            onChange={this.update('searchInput')}
            />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }

}

export default SearchForm;
