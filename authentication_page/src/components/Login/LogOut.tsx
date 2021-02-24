import React, { Fragment } from 'react'
import { useFirebaseApp } from "reactfire";
import "firebase/auth";

export const Logout: React.FC = () => {
    //import firebase
    const firebase = useFirebaseApp();  //firebase hook

    // onChange funciton
    const handleClick = async (e: React.FormEvent<HTMLButtonElement>) => {
        await firebase.auth().signOut();
    }

    return (
        <Fragment>
            <button type="button" onClick={handleClick}>Log Out</button>
        </Fragment>

    );
}
