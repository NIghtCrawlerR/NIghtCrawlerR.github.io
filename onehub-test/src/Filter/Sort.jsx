import React, { Component } from 'react';


class Sort extends Component {
    constructor() {
        super();
        this.state = {
            isMenuOpen: false
        }
    }

    render() {
       
        return (

            <div className="Sort">
                    <span className="Sort-by">Sort by:</span>
                    <select name="sort-by" id="" onChange={this.props.sortCourses}>
                        <option value="none">None</option>
                        <option value="price">Price</option>
                        <option value="rating">Rating</option>
                    </select>

                    <div className={this.props.activeMode ? 'display__prop display__list active-mode' : 'display__prop display__list'} onClick={this.props.changeDisplayMode}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className={this.props.activeMode ? 'display__prop display__bricks' : 'display__prop display__bricks active-mode'} onClick={this.props.changeDisplayMode}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

        )
    }
}

export default Sort;