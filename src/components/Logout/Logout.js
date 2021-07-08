import React from 'react';

const Logout = ({handleLogout, email, uid}) => {
    return (
        <section className="main">
            <nav>
                <h2>Welcome!</h2>
                <h2>You Email: {email}</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <table>
                <h1>Your data:</h1>
                <tr>
                    <th>Email</th>
                    <th>UID</th>
                </tr>
                <tr>
                    <td>{email}</td>
                    <td>{uid} --- SECRET CODE!!!</td>
                </tr>
            </table>
        </section>
    );
};

export default Logout;