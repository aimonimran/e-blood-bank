import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);

	function signup(email, password) {
		return auth
			.createUserWithEmailAndPassword(email, password)
			.then((result) => setCurrentUser(result.user.email));
	}

	function login(email, password) {
		return auth
			.signInWithEmailAndPassword(email, password)
			.then((result) => setCurrentUser(result.user.email));
	}

	function logout() {
		return auth.signOut().then(() => setCurrentUser(null));
	}

	useEffect(() => {
		return auth.onAuthStateChanged((user) => {
			if (user) setCurrentUser(user.email);
		});
	}, []);

	const value = {
		currentUser,
		login,
		signup,
		logout
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
