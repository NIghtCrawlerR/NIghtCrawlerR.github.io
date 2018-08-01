import React, { Component } from 'react';
import './Filter.css';
import './Sort.css';

class Select extends Component {
    constructor() {
        super();
        this.state = {
            isMenuOpen: false
        }
    }


    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }


    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                isMenuOpen: false
            })
        }
    }

    handleClick = () => {
        this.setState({
            isMenuOpen: !this.state.isMenuOpen
        })
    }

    render() {

        return (

            <div ref={this.setWrapperRef} className="inputGroup" >
                <div className="Filter__select" onClick={this.handleClick}>{this.props.param}</div>

                {<form className={this.state.isMenuOpen ? 'Filter__dropdown Filter__dropdown--active' : 'Filter__dropdown'} onChange={this.props.addFilter} >
                    <h4>{this.props.param}</h4>

                    {this.props.list.map((i) => {
                        return (
                            <div>
                                <input id={i} type="checkbox" name={i} value={this.props.param} className="checkbox"/>
                                <label htmlFor={i}>{i}</label>
                            </div>
                        )
                    })}

                </form>}
            </div>

        )
    }
}

export default Select;