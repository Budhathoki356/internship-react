import React, { Fragment } from 'react';
import { useUser } from "reactfire";
import { LoginPage } from './components/Login/LoginPage';
import { Logout } from './components/Login/LogOut';
// import RegisterPage from './components/Register/RegisterPage';

function App() {
  const user = useUser();
  return (
    <Fragment>
      {
        !user && <Logout />
      }
      {
        user &&
        <>
          {/* <RegisterPage /> */}
          <LoginPage />
        </>
      }
    </Fragment>
  );
}

export default App;
