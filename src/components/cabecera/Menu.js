import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import '../../css/menu.css';





export default class Menu extends Component {

    myFunction() {
        var x = document.getElementById("centered_nav");
        if (x.className === "rc_nav") {
            x.className += " responsive";
        } else {
            x.className = "rc_nav";
        }
    }




    render() {
        return (

            <div>
                <div className="rc_nav" id="centered_nav">
                    <Link to="/"><FormattedMessage id="menu.inicio" /></Link>
                    <Link to="/our-work"><FormattedMessage id="menu.trabajos" /></Link>
                    <Link to="/our-games"><FormattedMessage id="menu.juegos" /></Link>
                    <Link to="/who-we-are"><FormattedMessage id="menu.somos" /></Link>
                    <Link to="/contact-us"><FormattedMessage id="menu.contacto" /></Link>

                    <button title="Menu" className="icon" onClick={this.myFunction}>
                        &#9776;
                    </button>

                </div>
            </div>
        )
    }
}
