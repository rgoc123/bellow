import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

class Footer extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="footer-container">
        <div className="footer">
          <img id="footer-img" src="https://s3-media4.fl.yelpcdn.com/assets/srv0/yelp_styleguide/ce4d102c522c/assets/img/structural/footer_cityscape@2x.png" />
          <div id="footer-info">
            <p>Created by Robert O'Connor</p>
            <ul>
              <li>
                <a href="https://github.com/rgoc123" target="_blank"><i className="fa fa-github"></i></a>
              </li>
              <li>
                <a href="http://robertoconnor.io/" target="_blank"><i className="fa fa-home"></i></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/robertoconnor-1/" target="_blank"><i className="fa fa-linkedin"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default Footer;
