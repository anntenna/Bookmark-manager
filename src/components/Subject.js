import React, { Component } from 'react';

export default class Section extends Component {
     constructor(props) {
         super(props);
         
         
         this.state = {
             classIndex: "text-primary",
             classNames: ["text-primary", "bg-primary", "bg-success", "bg-info", "bg-warning", "bg-danger"],
             showLink: false
         }
             
    };
    
    showLinkToggle = prevState => {
        this.setState({
            showLink: !prevState.showLink
        });
    }


    changeBackground() {
        //console.log(this.state.classNames.length);
        this.setState({
            classIndex: this.state.classIndex < this.state.classNames.length - 1 ? this.state.classIndex + 1 : 0
        })

        
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
            </div>
            );
    }
}
