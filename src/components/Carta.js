import React, { Component } from 'react'

export default class Carta extends Component {
    render() {
        return (
            <div className="Carta">
                {this.props.children}
            </div>
        )
    }
}
