import React from 'react';
import {BrowserRouter, Switch, Route, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Project from '../components/Project';

const AppRouter = () => (
    <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route path="/" component={About} exact={true} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                    <Route path="" component={NotFoundPage} />
                </Switch>
            </div>
    </BrowserRouter>
)

export default AppRouter