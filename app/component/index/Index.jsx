import React, { Component } from 'react';
import '../../public/css/index.pcss';

export default class Index extends Component {
    render() {
        return (
            <div className="cont">
                <div className="top">
                    <div>头部</div>
                    <i className="logo" />
                </div>
                <div className="bottom">底部</div>
            </div>
        );
    }
}