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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.props.updateSearchInput(this.state.searchInput);
    this.props.props.history.push('/search');
  }

  // update(field) {
  //   return (
  //     this.setState({
  //       [field]: this.refs.search.getValue()
  //     })
  //   );
  // }

  handleUpdateInput(value) {
    return (this.setState({
      searchInput: value
    }));
  }

  updateDataSource() {
    this.props.businesses.forEach(business => {
      this.dataSource.push({
        text: `${business.name}`,
        value: (<MenuItem
          primaryText={business.name}
          onClick={() => {this.props.props.history.push(`/businesses/${business.id}`);}} />)
      });
    });
  }

  render() {
    this.updateDataSource();
    return (
      <div className="search-form-container-landing">
        <span className="search-find-landing">Search</span>
        <form onSubmit={this.handleSubmit}>
          <AutoComplete
            ref='search'
            className="search-biz-input-landing"
            hintText="text-value data"
            filter={AutoComplete.fuzzyFilter}
            dataSource={this.dataSource}
            onUpdateInput={this.handleUpdateInput}
            maxSearchResults={5}
          />
          <button className="search-button-landing"><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
      </div>
    );
  }

}

export default NewSearch;
