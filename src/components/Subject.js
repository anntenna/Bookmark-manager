import React, { Component } from 'react';

export default class Section extends Component {
     constructor(props) {
         super(props);
         
         
         this.state = {
             classIndex: "text-primary",
             classNames: ["text-primary", "bg-primary", "bg-success", "bg-info", "bg-warning", "bg-danger"],
             showLinks: true,
             title: '',
             url: '',
             showDelete: false

         }

         this.handleAddClick = this.handleAddClick.bind(this);
         this.handleLinkToggle = this.handleLinkToggle.bind(this);
         this.handleTyping = this.handleTyping.bind(this);
         this.handleDeleteClick = this.handleDeleteClick.bind(this);
             
    };
    
    handleLinkToggle = () => {
        this.setState(prevState => {
            return {showLinks: !prevState.showLinks};
        });
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
        const index = this.props.index;
        const resource = {
            title: this.state.title,
            url: this.state.url
        }
        this.props.addResource(index, resource);
        this.setState({
            title: '',
            url: ''
        })
    }

    handleDeleteClick = (e) => {
        const subjectIndex = this.props.index;
        const resourceIndex = e.target.id;
        console.log(subjectIndex, resourceIndex);
        //debugger;

    }

    //event handlers
    render() {
        const ulStyle = {
            listStyle: 'none',
            padding: 0
        }
        const liStyle = {
            paddingLeft: '20px'
        }
        const iStyle = {
            padding: '5px'
        }
        
        const heading = <h3><span onClick={this.handleLinkToggle}>{this.props.items.subject}</span></h3>;
        const content = 
        <div hidden={this.state.showLinks}>
            <ul style={ulStyle}>
                {this.props.items.resources.map((resource, index) => {
                    return (
                        <li style={liStyle} key={resource.title + resource.url}>
                            <i id={index} className="fa fa-times" aria-hidden="true" style={iStyle} onClick={this.handleDeleteClick} title="Delete"></i>
                            <a href={resource.url}>
                                {resource.title}
                            </a>
                        </li>);
                    })}
            </ul>
            <div className="form-group"> 
                <input type="text" name="title" value={this.state.title} onChange={this.handleTyping} placeholder="Add a title..."/>{'  '}
                <input type="text" name="url" value={this.state.url} onChange={this.handleTyping} placeholder="Add a URL..."/>{'  '}
                <button className="btn btn-default" onClick={this.handleAddClick}><i className="fa fa-plus" aria-hidden="true"></i></button>
            </div>
        </div>;
        return (
            <div>
                {heading}
                {content}
            </div>
        );
    }
}
