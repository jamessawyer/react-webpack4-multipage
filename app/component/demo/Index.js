import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

import '../../public/css/index.pcss';

export default class Index extends Component {
  render() {
    return (
      <div className="cont">
        <Header />
        <div className="demo">这是DEMO</div>
        <Footer />
      </div>
    );
  }
}
