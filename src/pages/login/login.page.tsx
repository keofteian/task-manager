import React from "react";
import { loginApi } from '../../api/auth/login.api';

const LoginPage = () => {
    const loginHandler = async () => {
        let data = await loginApi();
        console.log('Response');
        console.log(data);
    }

    return (
        <>
            <h3>Login</h3>
            <button onClick={() => loginHandler()}>
                Login
            </button>
        </>
    );
};

export default LoginPage;