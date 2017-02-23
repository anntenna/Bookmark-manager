import React, { Component } from 'react';

export default class NewSubject extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            headerInput: ''
        }

        //bind event handlers and internal functions
        this.handleTyping = this.handleTyping.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



handleSubmit = e => {
e.preventDefault();

this.props.addSubject(this.state.headerInput);

this.setState({
    headerInput: ''
});

}

handleTyping = e => {
    this.setState({
      headerInput: e.target.value
    })
    e.preventDefault();
  }

render() {
    return (
        <div className="container">
            <input type="text" value={this.state.headerInput} onChange={this.handleTyping} placeholder="Add a section..."/>{'  '}
            <button className="btn btn-default" onClick={this.handleSubmit}>
                <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
        </div>
    )
    
}
    
}