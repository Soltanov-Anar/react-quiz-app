import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                isAuthenticated={this.props.isAuthenticated}
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

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}


export default connect(mapStateToProps, null)(Layout);