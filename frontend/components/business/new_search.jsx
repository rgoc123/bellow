import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';

class NewSearch extends React.Component {

  constructor(props) {
    super(props);
    this.dataSource = [];
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  // itemClick() {
  //   //may need e.preventDefault();
  //   this.props.props.history.push(`/businesses/${business.id}`);
  // }

  updateDataSource() {
    this.props.businesses.forEach(business => {
      this.dataSource.push({
        text: `${business.name}`,
        value: (<MenuItem
          primaryText={business.name}
          onClick={() => {this.props.props.history.push(`/businesses/${business.id}`);}} />)
      });
    });
    // return (
    //   this.dataSource = this.props.businesses.map(business => {
    //     return <MenuItem primaryText={business.name} />;
    //   })
    // );
  }

  render() {
    this.updateDataSource();
    debugger
    return (
      <div className="">
        <AutoComplete
          hintText="text-value data"
          filter={AutoComplete.fuzzyFilter}
          dataSource={this.dataSource}
        />
      </div>
    );
  }

}

export default NewSearch;
