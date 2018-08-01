import React, { Component } from 'react';

class Course extends Component {
    constructor() {
        super();
        this.state = {
           inWishList: false,
           inCart: false
        }
    }

    addToWishlist = () => {
        this.setState({
            inWishList: !this.state.inWishList
        })

        return this.state.inWishList ? this.props.removeFromWishList() : this.props.addToWishlist()
    }

    addToCart = () => {
        this.setState({
            inCart: !this.state.inCart
        })
        return this.state.inCart ? this.props.removeFromCart() : this.props.addToCart()
    }

    render() {

        const { img, topics, title, teacher, teacherFoto, price, rating, watched } = this.props

        return (
            <div className="Course">
                <div className="Course__img" style={{ backgroundImage: `url(${img})` }}>
                    <span className="Course__topic">{topics}</span>
                    <div className="Course__actions">
                        <div onClick={this.addToWishlist} className={this.state.inWishList ? 'addToWishlist inWishList' : 'addToWishlist'} ><i className="far fa-heart"></i></div>
                        <div onClick={this.addToCart} className={this.state.inCart ? 'addToCart inCart' : 'addToCart'}><i className="fas fa-shopping-cart"></i></div>
                    </div>
                    <div className="Course__best-seller">best seller</div>
                </div>

                <div className="Course__info">
                    <a className="Course__title" href="/">
                        {title}
                    </a>
                    <div className="Course__teacher">
                        <img src={teacherFoto} alt="" />
                        <p>{teacher}</p>
                    </div>
                    <div className="Course__bottom">
                        <div className="Course__rating">
                            <span><i className="far fa-heart"></i>{rating}</span>
                            <span><i className="fas fa-user-friends"></i>{watched}</span>
                        </div>
                        <div className="Course__price">
                            ${price}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Course;