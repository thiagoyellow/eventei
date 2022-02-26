import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { Dashboard } from '../src/pages/Dashboard';
import { CreateEvent } from '../src/pages/CreateEvent';
import { ListEvent } from '../src/pages/ListEvents'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/criar-evento" exact component={CreateEvent} />
                <Route path="/list" exact component={ListEvent} />
            </Switch>
        </BrowserRouter>
    )
}