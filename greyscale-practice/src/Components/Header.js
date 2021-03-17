import React, {Component} from 'react';
import Menu from './HeaderComponents/Menu';
import MenuButton from './HeaderComponents/MenuButton';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            //can be 3 values: y/n/ip. ip = "in progress" y="yes" n="no". yes means to display the menu, no means to hide it, and ip means that the transition to hiding is in progress (After which the no value is set)
            displayMenu: "n"
        }
    }

    //This function accepts a string value in order to turn on or off the menu display. The 2 allowed values for the "string" parameter are "y", "n". The function 
    toggleMenu = (string) => {
        if (string==="y") {
            this.setState({displayMenu: string});
        } else if (string==="n") {
            this.setState({displayMenu: "ip"});
            setTimeout(() => {
                this.setState({displayMenu: "n"})
            }, 1000);
        } else {
            console.log("ERROR: invalid parameter provided in the toggleMenu function");
        }
    }

    render() {
        return(
            <header>
                <div className="headerContainer">
                    <h3>Start Bootstrap</h3>
                    <MenuButton 
                        toggleMenu={this.toggleMenu}
                        displayMenu={this.state.displayMenu}
                    />
                </div>
                <Menu 
                    displayMenu={this.state.displayMenu}
                />
            </header>
        );
    }
}

export default Header;