import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Auth from './components/auth/Auth';
import Form from './components/form/Form';
import Post from './components/post/Post';
import Nav from './components/nav/Nav';

export default (
    <Switch>
        <Route exact path="/" component={Nav}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/form" component={Form}/>
        <Route path="/post" component={Post}/>
        <Route path="/auth" component={Auth}/>
    </Switch>
)