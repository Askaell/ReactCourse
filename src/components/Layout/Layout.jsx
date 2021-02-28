import React from 'react';
import { MessageField } from '../MessageField';
import Container from '@material-ui/core/Container';
import { Header } from '../Header';
import { ChatList } from '../ChatList';
import Grid from '@material-ui/core/Grid';
import './Layout.css';

const Layout = () => {
    return (
        <Container className="container" maxWidth="md">
            <Header />
            <Grid container spacing={0}>
                <Grid item xs={3}>
                    <ChatList />
                </Grid>
                <Grid item xs={9}>
                    <MessageField />
                </Grid>
            </Grid>
        </Container>
    );
};

export { Layout };
