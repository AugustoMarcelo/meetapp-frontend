import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
    return (
        <>
            <img src={logo} alt="Meetapp Logo" />

            <form>
                <input placeholder="Your full name" />
                <input type="email" placeholder="Your e-mail" />
                <input type="password" placeholder="Your password" />

                <button type="submit">Register</button>
                <Link to="/">I already have an account</Link>
            </form>
        </>
    );
}
