import { Switch, Route } from 'react-router-dom';

import { Layout } from '../Layout';
import { ProfileLayout } from '../ProfileLayout';
import { NotFound } from '../NotFound';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Layout} />
            <Route exact path="/chat/:chatId" component={Layout} />
            <Route exact path="/profile" component={ProfileLayout} />
            <Route component={NotFound} />
        </Switch>
    );
};

export { Router };
