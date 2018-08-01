import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <ul>
                    <li className="Navigation--active">Home</li>
                    <li>Explore</li>
                    <li>Course</li>
                    <li>Partner</li>
                    <li>Event</li>
                    <li>Membership</li>
                    <li>Forum</li>
                    <li>Elements</li>
                    <li>Pages</li>
                </ul>
            </div>
        )
    }
}

export default Navigation;