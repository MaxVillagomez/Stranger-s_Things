import React, { useState } from 'react';

function AuthForm({ token, setToken, user, setUser }) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    return <h1>
        This is my AuthForm
    </h1>;
}

export default AuthForm;