import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard';

function AppNavigator() {
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === '/') navigate('/dashboard');
	}, [navigate, location]);

	return <Dashboard />
}

export default AppNavigator;
