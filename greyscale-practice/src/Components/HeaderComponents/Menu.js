import React, {Component} from 'react';

class Menu extends Component {
// props:
    // displayMenu={this.state.displayMenu}
    

    render() {
        return(
            <nav className={this.props.displayMenu==="y"?"display":this.props.displayMenu==="ip"?"inProgress":this.props.displayMenu==="n"?"noDisplay":null}>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default Menu;