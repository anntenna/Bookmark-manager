import React, { Component } from 'react';

export default class Section extends Component {
     constructor(props) {
         super(props);
         
         
         this.state = {
             classIndex: "text-primary",
             classNames: ["text-primary", "bg-primary", "bg-success", "bg-info", "bg-warning", "bg-danger"],
             showLink: false,
             newResourceTitle: '',
             newResourceURL: '',

         }
             
    };
    
    showLinkToggle = prevState => {
        this.setState({
            showLink: !prevState.showLink
        });
    }


    changeBackground = () => {
        //console.log(this.state.classNames.length);
        this.setState({
            classIndex: this.state.classIndex < this.state.classNames.length - 1 ? this.state.classIndex + 1 : 0
        })

        
    }

    handleTyping = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
        e.preventDefault();
    }

    handleAddClick = (e) => {
        const subject = this.props.items.subject;
        let resource = {
            title: this.state.newResourceTitle,
            url: this.state.newResourceURL
        }
        this.props.addResource(subject, resource);
    }
    //event handlers
    render() {
        return (
            <div>
                <h2><span onClick={() => this.changeBackground()}>{this.props.items.subject}</span></h2>
                <ul>
                    {this.props.items.resources.map(resource => {
                        
                        return (
                            <li key={resource.title + resource.url}>
                                <a href={resource.url} className={this.state.classNames[this.state.classIndex]}>
                                    {resource.title}
                                </a>
                                
                            </li>);
                    })}
                </ul>
                <input type="text" name="newResourceTitle" value={this.state.newResourceTitle} onChange={this.handleTyping.bind(this)} placeholder="Add a title..."/>{' '}
                <input type="text" name="newResourceURL" value={this.state.newResourceURL} onChange={this.handleTyping.bind(this)} placeholder="Add a URL..."/>{' '}
                <button className="btn btn-primary" onClick={this.handleAddClick.bind(this)}><i className="fa fa-plus" aria-hidden="true"></i></button>
            </div>
            );
    }
}
