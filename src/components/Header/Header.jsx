import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AppBar, Toolbar, Typography } from '@material-ui/core';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className="title">
                        Messanger
                    </Typography>
                    <Link to="/profile">
                        <Avatar className="avatar"></Avatar>
                    </Link>
                </Toolbar>
            </AppBar>
        );
    }
}

export { Header };
