import React from 'react';
import { auth } from './Auth/Config';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './Auth/Login'
import Main from './page/Main';
  
function App() {
  const [user] = useAuthState(auth);
  return (
    <div style={{textAlign: 'center'}}>
{ user ? <Main/> : <Login/>}
    </div>
   
  );
}
  
export default App;
