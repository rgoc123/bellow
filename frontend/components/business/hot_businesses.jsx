import React from 'react';
import { Link, withRouter } from 'react-router-dom';



class HotBusinesses extends React.Component {

  render() {

    return (
      <div className="content-container">
        <h1 id="pop-biz">Popular Businesses</h1>
        <div className="hot-businesses">
          <div className="hot-and-new-container">
            <a id="lois" href="/#/businesses/180"><div id="lois"></div></a>
            <div className="hot-info">
              <a href="/#/businesses/180">Lois</a>
              <div className="rating-img-5"></div>
              <span>$$</span><br></br>
              <span>East Village</span>
            </div>
          </div>
          <div className="hot-and-new-container">
            <a id="joes" href="/#/businesses/178"><div id="joes"></div></a>
            <div className="hot-info">
              <a href="/#/businesses/178">Joe's Pizza</a>
              <div className="rating-img-5"></div>
              <span>$</span><br></br>
              <span>West Village</span>
            </div>
          </div>
          <div className="hot-and-new-container">
            <a id="jgs" href="/#/businesses/172"><div id="jgs"></div></a>
            <div className="hot-info">
              <a href="/#/businesses/172">JG Melon's</a>
              <div className="rating-img-5"></div>
              <span>$$</span><br></br>
              <span>Lenox Hill</span>
            </div>
          </div>
        </div>
      </div>
    );

  }

}

export default HotBusinesses;
