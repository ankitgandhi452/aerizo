import React, { PureComponent } from 'react';
import './App.scss';

class App extends PureComponent {
  render() {
    return (
      <div className="homepage">
        <div className="nav">
          <div className="nav-container">
            <div className="nav-header">
              <span>BUY NOW</span>
              <span>PRICES</span>
              <span>WHY US</span>
              <span>CLIENTS</span>
            </div>
            <div className="nav-oval">
              <div className="oval-text-left">AERIZO</div>
              <div className="oval-text-right">GLOBAL</div>
            </div>
            <div className="nav-text">The modern generation paper sellers</div>
            <div className="nav-button">
              Buy Now <span className="right-arrow">----&gt;</span>
            </div>
          </div>
        </div>
        <div className="features">
          <div className="feature-section">
            <div className="feature-section-symbol" />
            <div className="feature-section-header">BEST MARKET PRICE</div>
            <div className="feature-section-subheader">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
          </div>
          <div className="feature-section">
            <div className="feature-section-symbol" />
            <div className="feature-section-header">LARGE INVENTORY</div>
            <div className="feature-section-subheader">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
          </div>
          <div className="feature-section">
            <div className="feature-section-symbol" />
            <div className="feature-section-header">DOORSTEP DELIVERY</div>
            <div className="feature-section-subheader">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
