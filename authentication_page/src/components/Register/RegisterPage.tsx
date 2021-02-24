import React, { Fragment, useState } from 'react';
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth'

export interface IUserProps {
    nickname?: string;
    email: string;
    password: string;
    error: string;
}

const RegisterPage: React.FC = () => {

    //impmort firebase
    const firebase = useFirebaseApp();  //firebase hook

    // User state
    const [user, setUser] = useState<IUserProps>({
        nickname: '',
        email: '',
        password: '',
        error: ''
    })

    // onChange funciton
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.currentTarget.name]: e.currentTarget.value,
            error: '',
        })
    }

    //Submit function ( Create Account )
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(result => {
                console.log('Registerd')
            })
            .catch(error => {
                console.log(error);
                setUser({
                    ...user,
                    error: error.message,
                })
            })
    }

    return (
        <Fragment>
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Nickname" name="nickname" onChange={handleChange} /><br />
                <input type="text" placeholder="Email" name="email" onChange={handleChange} /><br />
                <input type="password" placeholder="Password" name="password" onChange={handleChange} /><br />
                <button type="submit">Sign Up</button>
            </form>
            {user.error && <h4>{user.error}</h4>}
        </Fragment>

    );
}

export default RegisterPage;
