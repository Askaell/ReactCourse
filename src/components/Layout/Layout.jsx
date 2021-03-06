import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import { MessageField } from '../MessageField';
import { ChatList } from '../ChatList';

import './Layout.css';

class _Layout extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };

    render() {
        const { match } = this.props;

        return (
            <Grid className="grid_container" container spacing={0}>
                <Grid item xs={3}>
                    <ChatList />
                </Grid>
                <Grid item xs={9}>
                    <MessageField currentChat={match.params.chatId} />
                </Grid>
            </Grid>
        );
    }
}

const Layout = withRouter(_Layout);

export { Layout };
