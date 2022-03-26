import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { getAuth, EmailAuthProvider } from 'firebase/auth';
import { firebaseApp } from '../..';
import { useDispatch } from 'react-redux';
import { loginConExito } from './actions';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const uiConfig = {
    signInFlow: 'redirect',
    callbacks: {
      signInSuccessWithAuthResult: authResult => {
        // TODO: BORRAR ESTE CONSOLE.LOG
        console.log(authResult);
        dispatch(loginConExito(authResult.user));
        history.replace('/');
      }
    },
    signInOptions: [EmailAuthProvider.PROVIDER_ID]
  };
  const auth = getAuth(firebaseApp);

  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
  );
};

export default Login;
