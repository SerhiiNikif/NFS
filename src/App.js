import React, { useState, useEffect} from "react";
import fire_db from './firebase'
import Login from "./components/Login/Login";
import Logout from './components/Logout/Logout';
import './App.css';

function App() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInput = () => {
        setEmail('')
        setPassword('')
    }

    const clearError = () => {
        setEmailError('')
        setPasswordError('')
    }

    const handleLogin = () => {
        clearError();
        fire_db
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            })
    }

    const handleRegister = () => {
        clearError();
        fire_db
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                        case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            })
    };

    const handleLogout = () => {
        fire_db.auth().signOut();
    };

    const authListener = () => {
        fire_db.auth().onAuthStateChanged(user => {
            if (user) {
                clearInput()
                setUser(user)
            } else {
                setUser('')
            }
        })
    };

    useEffect(() => {
        authListener()
    })

  return (
      <div>
          {user ? (
              <Logout email={user.email} uid={user.uid} handleLogout={handleLogout} />
          ) : (
              <Login email={email}
                     setEmail={setEmail}
                     password={password}
                     setPassword={setPassword}
                     handleLogin={handleLogin}
                     handleRegister={handleRegister}
                     hasAccount={hasAccount}
                     setHasAccount={setHasAccount}
                     emailError={emailError}
                     passwordError={passwordError}
              />
          )}
      </div>
  );
}

export default App;
