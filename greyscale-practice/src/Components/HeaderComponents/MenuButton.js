import React, {Component} from 'react';

export default class MenuButton extends Component {
// props
    //toggleMenu={this.toggleMenu}
    //displayMenu={this.state.displayMenu}

    render() {
        return(
            <button className="menuButton" onClick={this.props.displayMenu==="n"?() => this.props.toggleMenu("y"):() => this.props.toggleMenu("n")}>Menu
                <svg viewBox="0 0 100 80" width="20" height="20">
                <rect width="100" height="10"></rect>
                <rect y="30" width="100" height="10"></rect>
                <rect y="60" width="100" height="10"></rect>
                </svg>
            </button>
        )
    }
}