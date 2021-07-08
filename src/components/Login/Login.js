import React from 'react';

const Login = (props) => {
    const {email, setEmail, password, setPassword, handleLogin, handleRegister,
        hasAccount, setHasAccount, emailError, passwordError} = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Email</label>
                <input type="text"
                       autoFocus
                       required
                       value={email}
                       onChange={e => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password"
                       required
                       value={password}
                       onChange={e => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {!hasAccount ? (
                        <>
                            <button onClick={handleLogin}>LOGIN</button>
                            <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Create!</span></p>
                        </>
                    ) : (
                        <>
                            <button className="button--reg" onClick={handleRegister}>REGISTRATION</button>
                            <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in!</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Login;