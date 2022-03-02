import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { Dashboard } from './pages/Dashboard';
import { CreateEvent } from '../src/pages/CreateEvent/index.tsx';
import { ListEvent } from '../src/pages/ListEvent'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/criar-evento" exact component={CreateEvent} />
                <Route path="/eventos" exact component={ListEvent} />
            </Switch>
        </BrowserRouter>
    )
}