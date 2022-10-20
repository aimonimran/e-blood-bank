import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { auth } from '../firebase';
import AccountNavigator from './account.navigation';
import AppNavigator from './app.navigation';

function Navigation() {
	const { currentUser, setCurrentUser } = useAuth();

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		return auth.onAuthStateChanged((user) => {
			if (user) setCurrentUser(user.email);
			setLoading(false);
		});
	}, [setCurrentUser]);

	if (loading) return <p>loading...</p>

	if (currentUser) return <AppNavigator />
	return <AccountNavigator />
}

export default Navigation;
