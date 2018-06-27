import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

class NewSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
    this.dataSource = [];
    this.cuisines = ['American', 'Burgers', 'Wings', 'Mexican',
    'Bagels', 'Chinese', 'Pizza', 'Bar', 'Wine', 'German',
    'French', 'Sushi', 'Cuban'];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.props.fetchBusinesses();
  }

  indexCuisines(cuisine) {
    this.state.searchInput = cuisine;
    this.props.props.updateSearchInput(this.state.searchInput);
    this.props.props.history.push('/search');
  }

  menuItemClick(business) {
    this.props.props.history.push(`/businesses/${business.id}`);
    this.props.fetchBusiness(business.id);
  }

  updateDataSource() {
    this.dataSource = [];
    this.props.businesses.forEach(business => {
      this.dataSource.push({
        text: `${business.name}`,
        value: (<MenuItem
          primaryText={business.name}
          onClick={() => {this.menuItemClick(business);}} />)
      });
    });
    this.cuisines.forEach(cuisine => {
      this.dataSource.push({
        text: cuisine,
        value: (<MenuItem
          primaryText={cuisine}
          onClick={() => {this.indexCuisines(cuisine);}}
        />)
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.props.updateSearchInput(this.state.searchInput);
    this.props.props.history.push('/search');
  }

  handleUpdateInput(value) {
    return (this.setState({
      searchInput: value
    }));
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
    if (this.dataSource.length === 0 && this.props.businesses.length > 0) {

      this.updateDataSource();
    }

    return (
      <div className={this.chooseHeaderClass()}>
        <span className={this.chooseFindClass()}>Search</span>
        <form onSubmit={this.handleSubmit}>
          <AutoComplete
            id="search-input"
            className={this.chooseBizInput()}
            filter={AutoComplete.fuzzyFilter}
            searchText={this.state.searchInput}
            dataSource={this.dataSource}
            onUpdateInput={this.handleUpdateInput}
            maxSearchResults={5}
            placeholder="pizza, burgers, Chinese, and more!"
          />
          <button className={this.chooseSearchButton()}><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
      </div>
    );
  }

}

export default NewSearch;
