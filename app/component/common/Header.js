import React from 'react';
import '../../public/css/common.pcss';

class Header extends React.Component {
  render() {
    return (
      <div className="top">
        <div>这是头部</div>
        <div>
          <i className="logo" />
        </div>
        <div className="nav">
          <a href="./index.html">首页</a> <a href="./shop.html">商城</a>{' '}
          <a href="./demo.html">Dome</a>
        </div>
      </div>
    );
  }
}

export default Header;
