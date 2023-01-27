import React, { Component } from "react";


export default class Radio extends Component{
    state = {
        skill: 'junior',
        deal: true
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleDealChange = (e) => {
        this.setState({
            deal: e.currentTarget.checked
        });
    };


    render() {
        return (
            <form>
            <label > junior
                    <input onChange={this.handleChange}
                    checked = {this.state.skill === 'junior'}
                    type="radio"
                    name='skill'
                    value="junior"
                   
                />
                </label> middle
                <label >
                    <input onChange={this.handleChange}
                    checked = {this.state.skill === 'middle'}
                    type="radio"
                    name='skill'
                        value="middle"
                        
                    
                />
                </label>
                <label > senior
                    <input onChange={this.handleChange}
                    checked = {this.state.skill === 'senior'}
                    type="radio"
                    name='skill'
                    value="senior"
                    
                />
                </label>
                <label>
                    <input
                        onChange={this.handleDealChange}
                        type='checkbox'
                        name='deal'
                        checked={this.state.deal} 
                        style={{ marginLeft: '10px' }}
                        // value='red'
                    />
                </label>
                <button
                    disabled={!this.state.deal}
                    style={{ backgroundColor: 'green', marginLeft: '10px' }}

                    type='submit'>Send
                </button>
        </form>
        );
       
    }
}