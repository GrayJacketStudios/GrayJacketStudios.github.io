import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import '../../css/menu.css';

export default class Menu extends Component {

    myFunction() {
        var x = document.getElementById("menu");
        if (x.className === "menu") {
            x.className += " responsive";
        } else {
            x.className = "menu";
        }
    }


    render() {
        return (
            <div >
                <nav>
                    <ul className="menu" id="menu">
                        <li><Link to="/"><FormattedMessage id="menu.inicio" /></Link></li>
                        <li><Link to="/what-we-do"><FormattedMessage id="menu.hacemos" /></Link></li>
                        <li><Link to="/tecnologies"><FormattedMessage id="menu.tecnologias" /></Link></li>
                        <li><Link to="/our-work"><FormattedMessage id="menu.trabajos" /></Link></li>
                        <li><Link to="/our-games"><FormattedMessage id="menu.juegos" /></Link></li>
                        <li><Link to="/who-we-are"><FormattedMessage id="menu.somos" /></Link></li>
                        <li><Link to="/contact-us"><FormattedMessage id="menu.contacto" /></Link></li>
                        <li><button class="icon" onClick={this.myFunction}>
                            <i class="fa fa-bars"></i>
                        </button></li>
                    </ul>

                </nav>

            </div>
        )
    }
}
