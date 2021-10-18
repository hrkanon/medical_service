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
import { useHistory } from "react-router";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const history = useHistory();
  const auth = getAuth();

  //   sign up using google
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        history.push("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  //   sign up with email
  const signUpWithEmailPassword = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
          history.push("/");
        });
      })
      .catch((error) => {
        setError(error.message);
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
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    user,
    error,
    handleGoogleSignIn,
    signUpWithEmailPassword,
    signInUsingEmailPassword,
    handleSignOut,
  };
};

export default useFirebase;
