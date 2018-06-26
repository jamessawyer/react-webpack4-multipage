import React, { Component } from 'react';
import '../../public/css/index.pcss';

export default class Index extends Component {
    render() {
        return (
            <div className="cont">
                <div className="top">
                    <div>头部</div>
                    <div>
                        <i className="logo" />
                    </div>
                    <div className="nav">
                        <a href="./index.html">首页</a>{' '}
                        <a href="./shop.html">商城</a>
                    </div>
                </div>
                <div>这是首页</div>
                <div className="bottom">底部</div>
            </div>
        );
    }
}