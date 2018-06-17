import React from 'react';
import logo from './logo.png';

class Header extends React.Component{
    render(){
        return(
            <div className="Header clearfix">
                <h1>{this.props.name}</h1>
                <img src={logo} alt=""/>
            </div>
        );
    }
}

export default Header;