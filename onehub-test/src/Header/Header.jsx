import React, { Component } from 'react';
import logo from '../logo.png';
import './Header.css';

class Header extends Component {
    

    render() {
        return (
            <div className="Header">
                <div className="Header__wrap">
                    <div className="Header__logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="Header__categories">
                        <div className="dropdown-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <p className="title">Categories</p>
                        <div className="Header__categories__dropdown">
                            <p>Programming</p>
                            <p>Design</p>
                            <p>Mobile</p>
                            <p>Security</p>
                            <p>Software</p>
                        </div>
                    </div>
                    <div className="Header__search-field">
                        <input type="text" placeholder="Search your course..." />
                    </div>
                    <div className="Header__wishlist">
                        <div className="Header__wish Header__wishlist__liked">
                            <span>{this.props.wish}</span>
                            <i className="far fa-heart"></i>
                        </div>
                        <div className="Header__wish Header__wishlist__cart">
                            <span>{this.props.cart}</span>
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                    </div>
                    <div className="Header__button">
                        <button>Become an instructor</button>
                    </div>
                    <div className="Header__auth">
                        <a href="#" className="Header__auth__link">Sign in</a>
                        <a href="#" className="Header__auth__link">Sign up</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;