import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import AccountNavigator from "./AccountNavigator";
import AppNavigator from "./AppNavigator";

function Navigation() {
  const { currentUser, setCurrentUser } = useAuth();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) setCurrentUser(user.email);
      setLoading(false);
    });
  }, [setCurrentUser]);

  if (loading) return <div id="preloader"></div>;

  if (currentUser) return <AppNavigator />;
  return <AccountNavigator />;
}

export default Navigation;
