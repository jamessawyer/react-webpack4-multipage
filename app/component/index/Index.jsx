import React, { Component } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

import '../../public/css/index.pcss';

export default class Index extends Component {
    render() {
        return (
            <div className="cont">
                <Header />
                <div className="index">这是首页</div>
                <Footer />
            </div>
        );
    }
}