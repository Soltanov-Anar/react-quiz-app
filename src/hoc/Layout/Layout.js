import React, { Component } from 'react';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import MenyToggle from '../../components/Navigation/MenyToggle/MenyToggle';
import classes from './Layout.module.css'

class Layout extends Component {
    
    state = {
        menu: false
    }
    
    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    menuCloseHandler = () => {
        this.setState({
            menu: false
        });
    }
    
    render() {
        return (
            <div className={classes.Layout}>

            <Drawer 
                isOpen={this.state.menu}
                onClose={this.menuCloseHandler}
            />

            <MenyToggle 
                onToggle={this.toggleMenuHandler}
                isOpen={this.state.menu}
            />

                <main>
                    { this.props.children }
                </main>

            </div>
        )
    }
}

export default Layout