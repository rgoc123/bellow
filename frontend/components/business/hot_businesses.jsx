import React from 'react';
import { Link, withRouter } from 'react-router-dom';



class HotBusinesses extends React.Component {

  render() {

    return (
      <div className="content-container">
        <h1 id="pop-biz">Popular Businesses</h1>
        <div className="hot-businesses">
          <div className="hot-and-new-container">
            <a id="lois" href="/#/businesses/99"><div id="lois"></div></a>
            <div className="hot-info">
              <a href="/#/businesses/99">Lois</a>
              <div className="rating-img-5"></div>
              <span>$$</span><br></br>
              <span>East Village</span>
            </div>
          </div>
          <div className="hot-and-new-container">
            <a id="joes" href="/#/businesses/97"><div id="joes"></div></a>
            <div className="hot-info">
              <a href="/#/businesses/97">Joe's Pizza</a>
              <div className="rating-img-5"></div>
              <span>$</span><br></br>
              <span>West Village</span>
            </div>
          </div>
          <div className="hot-and-new-container">
            <a id="jgs" href="/#/businesses/91"><div id="jgs"></div></a> //Increase by 16 every reseed
            <div className="hot-info">
              <a href="/#/businesses/91">JG Melon's</a>
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
