import React from 'react';
import { auth } from './Config';
  
const Login = () => {
  
    // Sign in Anonymously
    const signIn = () => {
        auth.signInAnonymously().catch(alert);
    }
    return (
        <div>
            <center>
                <button style={{marginTop:"250px",fontSize: "20px",border:"none", padding:"10px" , fontWeight:"bold",color:"white",cursor:"pointer", backgroundColor:"#EC407A"}}
                onClick={signIn}>Sign In Anonymously</button>
            </center>
        </div>
    );
}
  
export default Login;