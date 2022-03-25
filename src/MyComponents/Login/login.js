import React, {Component} from 'react';
import {GoogleLogin} from 'react-google-login';

const clientId= "496677249984-ge2f422mknkaki2v67unjfrrvnoqofei.apps.googleusercontent.com";

class Login extends Component {
    render() {
    const onSuccess = (res) =>{
        console.log("Login successful", res.profileObj);
    }

    const onFailure = (res) =>{
        console.log("Login Failed", res);
    }


    return(
        <>
        <div id= "signInButton">
            <GoogleLogin
            clientId= {clientId}
            buttonText = "Sync google calendar"
            onSuccess= {onSuccess}
            onFailure= {onFailure}
            cookiePolicy={'single_host_origin'}
            />

        </div>
        </>
    );

}
}
export default Login;