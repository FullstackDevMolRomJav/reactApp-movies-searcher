import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <h2>{this.props.text}</h2>
            </header>
        )
    }
}
