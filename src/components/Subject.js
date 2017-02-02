import React, { Component } from 'react';

export default class Section extends Component {
    constructor(props) {
        super(props);
    }
    //event handlers
    render() {
        return (<p>{this.props.subject}</p>);
    }
}