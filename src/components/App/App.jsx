import Container from '@material-ui/core/Container';

import { Router } from '../Router';
import { Header } from '../Header';

import './App.css';

const App = () => {
    return (
        <div id="app">
            <Container className="container" maxWidth="md">
                <Header />
                <Router />
            </Container>
        </div>
    );
};

export { App };
