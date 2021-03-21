import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, AppBar, Toolbar, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadProfile } from '../../redux/actions/profileActions';
import './Header.css';

class _Header extends Component {
    static propTypes = {
        profile: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.loadProfile();
    }

    render() {
        const { profile = '' } = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className="title">
                        Messanger
                    </Typography>
                    <Link to="/">
                        <Button>Chats</Button>
                    </Link>
                    <Link to="/profile">
                        <Button>{profile.profileName}</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile.profile,
});

const Header = connect(mapStateToProps, { loadProfile })(_Header);

export { Header };
