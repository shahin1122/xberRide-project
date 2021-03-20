import React, { useContext, useState } from 'react';
import css from './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router';



const Login = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }else {
        firebase.app(); 

    }


    const [newUser , setNewUser] = useState(false)

    const [user , setUser] = useState({
        isSignedIn : false , 
        name: '',
        email: '',
        pasword : '',
        error : '',
    })

    const handleBlur = (e)=>{
        let isFieldValid = true ;
         console.log(e.target.name , e.target.value);
         if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            //console.log(isEmailValid);
         }
         if(e.target.name === 'password'){
             const isPasswordValid = e.target.value.length > 6 ;
             const passwordHasNumber = /\d{1}/.test(e.target.value);
             isFieldValid = isPasswordValid && passwordHasNumber ;
             //console.log(isPasswordValid && passwordHasNumber );
    
         }
         if(isFieldValid){
             const newUserInfo = {...user };
             newUserInfo[e.target.name] = e.target.value ;
             setUser(newUserInfo);
         }
    
        }

        //user.updateProfile is not a function
    
     const handleSubmit=(e)=>{
         console.log(user.email , user.password);
            if( newUser && user.email && user.password){
                firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                    .then((res) => {
                        const newUserInfo = {...user};
                        newUserInfo.error = '';
                        setUser(newUserInfo);
                        //updateUserInfo(user.name)
                        console.log(res.user);

                        var {displayName , email} = res.user;
                        const signedInUser = {name: displayName , email}
                        setLoggedInUser(signedInUser);

                        history.replace(from);
                        
                    })
                    .catch((error) => {
                        const newUserInfo = {...user};
                        newUserInfo.error = error.message;
                        setUser(newUserInfo);
                        // var errorCode = error.code;
                        // var errorMessage = error.message;
                        // console.log(errorCode , errorMessage);
                    });

            }

            if(!newUser && user.email && user.password){
                firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                    .then((res) => {
                        const newUserInfo = {...user};
                        newUserInfo.error = '';
                        setUser(newUserInfo);
                        // history.replace(from);


                        
                        var {displayName , email} = res.user;
                        const signedInUser = {name: displayName , email}
                        setLoggedInUser(signedInUser);

                        history.replace(from);
                        
                       
                    })
                    .catch((error) => {
                        const newUserInfo = {...user};
                        newUserInfo.error = error.message;
                        setUser(newUserInfo);
                    });

            }
            e.preventDefault();
     }

    //  const updateUserInfo =name=>{
    //         user.updateProfile({
    //             displayName : name
    //         }).then( res=> {

    //         })
            
    //         .catch(error => {

    //         })  
                
        
    //  }


    //  google signIn

    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn =()=>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
           
            
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            //console.log(user);
            var {displayName , email} = result.user;
            const signedInUser = {name: displayName , email}
            setLoggedInUser(signedInUser);
            history.replace(from);
           
        }).catch((error) => {
            
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode,errorMessage ,email ,credential);
           
  });

}
    


    return (
        <div className="loginForm" >
            <h5>Login</h5>
            
            <form onSubmit={handleSubmit}>
                
            { newUser && <input name="name" placeholder="Your Name" onBlur={handleBlur} type="text"/>} <br/> <br/>
              <input type="text" placeholder="Email id" name="email" onBlur={handleBlur} required/> <br/> <br/>
                <input type="password" name="password" placeholder="password" onBlur={handleBlur}  required/><br/><br/>
                <input type="submit" value={newUser ? 'Sign up' : 'Sign In' }/>
            </form>
            <label htmlFor="">No account? <span style={{color:'green'}}>(Create)</span> </label>
            <input type="checkbox" onChange={()=>setNewUser(!newUser)} name="newUser" id=""/>

            <p style={{color:'red'}}>{user.error}</p>

            <button onClick={handleGoogleSignIn}>Sign in Using Google</button>

            

            

            
        </div>
    );
};

export default Login;