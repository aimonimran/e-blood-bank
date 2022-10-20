import React, { createContext, useContext, useState } from 'react';
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

	const value = {
		currentUser,
		setCurrentUser,
		login,
		signup,
		logout
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
