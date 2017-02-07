import React, { Component } from 'react';

export default class Section extends Component {
    constructor(props) {
        super(props);
    }
    //event handlers
    render() {
        return (
            <div>
                <h2>{this.props.items.subject}</h2>
                <ul>
                    <li>{this.props.items.resources[0].title}</li>
                </ul>
            </div>
            );
    }
}