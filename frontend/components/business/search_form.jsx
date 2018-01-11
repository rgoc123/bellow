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

  chooseHeaderClass() {
    if (this.props.props.location.pathname === "/") {
      return "search-form-container-landing";
    } else {
      return "search-form-container";
    }
  }

  chooseFindClass() {
    if (this.props.props.location.pathname === "/") {
      return "search-find-landing";
    } else {
      return "search-find";
    }
  }

  chooseBizInput() {
    if (this.props.props.location.pathname === "/") {
      return "search-biz-input-landing";
    } else {
      return "search-biz-input";
    }
  }

  chooseSearchButton() {
    if (this.props.props.location.pathname === "/") {
      return "search-button-landing";
    } else {
      return "search-button";
    }
  }

  render() {
    return (
      <div className={this.chooseHeaderClass()}>
        <span className={this.chooseFindClass()}>Find</span>
        <form onSubmit={this.handleSubmit}>
          <input
            className={this.chooseBizInput()}
            type="text"
            value={this.state.searchInput}
            onChange={this.update('searchInput')}
            placeholder="burgers, barbers, spas, handypeople..."
            />

          <button className={this.chooseSearchButton()}><i className="fa fa-search" aria-hidden="true"></i></button>

        </form>
      </div>
    );
  }

}

export default SearchForm;
