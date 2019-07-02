import React from 'react';
import { Switch,Route,Redirect } from 'react-router-dom'
import dashboard from '../containers/Dashboard';
import Friends from '../containers/Friends';
import FriendsofFriends from '../containers/FriendofFriends';

export const unprotectedRoutes = <Switch>
<Route path="/dashboard" exact component={dashboard} />
<Route path="/friends/:id" exact component={Friends} />
<Route path="/friendsOfFriends/:id" exact component={FriendsofFriends} />
<Redirect from="*" to ="/dashboard" />
</Switch>    