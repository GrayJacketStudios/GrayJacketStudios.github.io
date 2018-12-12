import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../../css/menu.css';

export default class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <nav>
                    <ul>
                        <li><Link to="/">INICIO</Link></li>
                        <li><Link to="/">QUE HACEMOS</Link></li>
                        <li><Link to="/">TECNOLOGIAS</Link></li>
                        <li><Link to="/">NUESTROS TRABAJOS</Link></li>
                        <li><Link to="/">NUESTROS JUEGOS</Link></li>
                        <li><Link to="/">QUIENES SOMOS</Link></li>
                        <li><Link to="/">CONTACTANOS</Link></li>
                    </ul>

                </nav>

            </div>
        )
    }
}
