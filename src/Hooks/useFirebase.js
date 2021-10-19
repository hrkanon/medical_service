import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();

  //   sign up using google
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  //   Registration with email and password
  const signUpWithEmailPassword = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      console.log(result.user);
      setUser(result.user);
      updateProfile(auth.currentUser, {
        displayName: name,
      });
    });
  };

  //   sign in with email and password
  const signInUsingEmailPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //   signOut
  const handleSignOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      setUser({});
    });
    // .finaly(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    error,
    handleGoogleSignIn,
    signUpWithEmailPassword,
    signInUsingEmailPassword,
    handleSignOut,
  };
};

export default useFirebase;
