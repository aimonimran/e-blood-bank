import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import AccountNavigator from './account.navigation';
import AppNavigator from './app.navigation';

function Navigation() {
	const { currentUser } = useAuth();
	return <Router>{currentUser ? <AppNavigator /> : <AccountNavigator />}</Router>;
}

export default Navigation;
