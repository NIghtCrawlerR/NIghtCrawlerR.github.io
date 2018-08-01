import React, { Component } from 'react';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';
import Courses from './Courses/Courses';


class App extends Component {
  constructor() {
    super();
    this.state = {
      wishList: 0,
      cart: 0
    }
  }

  addToWishlist = () => {
    this.setState({
      wishList: this.state.wishList + 1
    })
  }
  removeFromWishList = () => {
    this.setState({
      wishList: this.state.wishList - 1
    })
  }
  addToCart = () => {
    this.setState({
      cart: this.state.cart + 1
    })
  }
  removeFromCart = () => {
    this.setState({
      cart: this.state.cart - 1
    })
  }

  render() {
    return (
      <div className="App">
        <Header wish={this.state.wishList} cart={this.state.cart}/>
        <div className="Main_wrap">
          <Navigation />
          <Courses 
          addToCart={this.addToCart} 
          addToWishlist={this.addToWishlist} 
          removeFromCart={this.removeFromCart} 
          removeFromWishList={this.removeFromWishList}/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
