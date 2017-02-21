import React, { Component } from 'react';

export default class Color extends Component {
    constructor(props) {
        super(props);

        
        this.state = {
            selectedColor: "Light Grey",
        }

        this.handleColorChange = this.handleColorChange.bind(this);
    }
    
    //event handlers
    handleColorChange(e) {
        e.preventDefault();

        this.setState({
            selectedColor: e.target.value,
        });
    }

    render() {
        const colors = ["Red", "Yellow", "Orange", "Aqua", "Lime", "Purple", "Light Grey", "Dark Grey", "Blue", "Brown"];
        const output = this.colors.map(color => {
            return(
                <div className="radio">
                    <label>
                        <input type="radio" value={color} checked={this.state.selectedColor === this.color} onChange={this.handleColorChange} />
                        {color}
                    </label>
                </div>
            ) 
                
        });

        return(
            <div className="form">
                {output}
            </div>
        );
    }
}