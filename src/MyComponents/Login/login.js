import {GoogleLogin} from 'react-google-login';

const clientId= "496677249984-ge2f422mknkaki2v67unjfrrvnoqofei.apps.googleusercontent.com";

function login(){
    return(
        <div id= "signInButton">
            <GoogleLogin
            clientId= {clientId}
            buttonText = "Sync google calendar"
            onSuccess= {onSuccess}
            onFailure= {onFailure}
            cookiePolicy={'single_host_origin'}

        </div>
    )

}