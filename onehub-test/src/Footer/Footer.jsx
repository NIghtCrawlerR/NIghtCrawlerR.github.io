import React, { Component } from 'react';
import logo from '../logo-footer.png';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="Footer__wrap">
                    <div className="Footer__address">
                        <img src={logo} alt="" />
                        <p>Education, Inc.</p>
                        <p>3601 Seneca Street, New York City</p>
                        <p>NT 10010, USA</p>
                        <div className="Footer__social">
                            <a href="/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                            <a href="/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                            <a href="/" target="_blank"><i class="fab fa-twitter"></i></a>
                            <a href="/" target="_blank"><i class="fab fa-google-plus-g"></i></a>
                            <a href="/" target="_blank"><i class="fab fa-youtube"></i></a>
                            <a href="/" target="_blank"><i class="fab fa-pinterest"></i></a>
                        </div>
                    </div>
                    <div className="Footer__menu Footer__menu--left">
                        <h4>System</h4>
                        <ul>
                            <li><a href="/">Help center</a></li>
                            <li><a href="/">Support forum</a></li>
                            <li><a href="/">Affiliate</a></li>
                            <li><a href="/">Explore</a></li>
                            <li><a href="/">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="Footer__menu Footer__menu--right">
                        <h4>More</h4>
                        <ul>
                            <li><a href="/">About us</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Service</a></li>
                            <li><a href="/">Sign in</a></li>
                            <li><a href="/">Sign up</a></li>
                        </ul>
                    </div>
                    <div className="Footer__contacts">
                        <h4>Get in touch</h4>
                        <p className="Footer__contacts__text">Contact us in you need <br /> help with anything</p>
                        <p className="Footer__contacts__phone">(+01) 234 3454545</p>
                        <p className="Footer__contacts__phone">(+01) 234 3454545</p>
                        <p className="Footer__contacts__email">help@rubikthemes.org</p>
                    </div>
                </div>
                <div className="Footer__copyright">
                    <p>© 2018 Rubikthemes, All right <br /> reserved</p>
                </div>
            </div>
        )
    }
}

export default Footer;