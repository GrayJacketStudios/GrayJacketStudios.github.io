import React, { Component } from 'react'
import { Link } from 'react-router-dom';

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
                        <li><Link to="/">INICIO</Link></li>
                        <li><Link to="/">QUE HACEMOS</Link></li>
                        <li><Link to="/">TECNOLOGIAS</Link></li>
                        <li><Link to="/">NUESTROS TRABAJOS</Link></li>
                        <li><Link to="/">NUESTROS JUEGOS</Link></li>
                        <li><Link to="/">QUIENES SOMOS</Link></li>
                        <li><Link to="/">CONTACTANOS</Link></li>
                        <li><a href="javascript:void(0);" class="icon" onClick={this.myFunction}>
                            <i class="fa fa-bars"></i>
                        </a></li>
                    </ul>

                </nav>

            </div>
        )
    }
}
