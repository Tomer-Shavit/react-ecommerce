import React from 'react';
import SignIn from '../../sign-in/sign-in.component';
import SignUp from '../../sign-up/sign-up.component';
import './sign-up-and-sign-in.styles.scss';

const SignUpAndSignIn = () => (
    <div className='sign-up-and-sign-in'>
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
);

export default SignUpAndSignIn;