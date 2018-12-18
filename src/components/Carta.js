import React, { Component } from 'react'
import '../css/Carta.css';

export default class Carta extends Component {
    render() {
        return (
            <div className="carta" style={{ backgroundColor: this.props.bcolor || '#282c34' }}>
                <div className="inside">
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
