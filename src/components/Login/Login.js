
import React from 'react';
import classes from './Login.css';
import Button from '@material-ui/core/Button';
import { auth,provider } from '../../firebase';
import {actionTypes} from '../reducer';
import {useStateValue} from  '../StateProvider';

function Login() {

    const[state, dispatch] = useStateValue();
    const signIn= () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));


    };
    return <div className={classes.login}>
        <div className={classes.login__logo}>
            <img 
            src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
            alt=''
            />
            <img src='https://www.freepngimg.com/thumb/facebook/24851-7-facebook-logo.png'
            alt=''>

            </img>

        </div>
        <Button type= 'submit' onClick={signIn}>
            Sign In
        </Button>
    </div>
}

export default Login;