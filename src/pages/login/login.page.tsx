import React from "react";
import { Button } from './login.styles';
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
            <Button onClick={() => loginHandler()}>
                Login
            </Button>
        </>
    );
};

export default LoginPage;