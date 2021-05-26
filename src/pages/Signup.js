import React,{useEffect, useContext} from 'react'
import {Redirect} from 'react-router-dom'
import firebase from 'firebase'
import {UserContext} from '../context/UserContext'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleButton from 'react-google-button'
import Navbar from '../Components/navbar'

export default function Signup() {

const context = useContext(UserContext);

var provider = new firebase.auth.GoogleAuthProvider();

const googleAuth = () => {
   firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    // var credential = result.credential;
    // var token = credential.accessToken;
    // The signed-in user info.
    // var Signeduser = result.user;
    toast(`Welcome ${result.user.displayName}`,{type: "success"})
  }).catch((error) => {
    // Handle Errors here.
    // var errorCode = error.code;
    var errorMessage = error.message;
    // var email = error.email;
    // var credential = error.credential;
    toast(errorMessage, { type: "error"});
    // ...
  });
}

useEffect(() => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      context.setUser({email: user.email, uid: user.uid})
    }
  });
}, [])


  if (context.user == null) {
    return (
      <div>
      <ToastContainer/>
      <ToastContainer/>
      <Navbar/>
      <GoogleButton className="align-self-center mx-auto auth-btn" onClick={googleAuth}/>
      </div>
  )
  } else {
    return (
      <Redirect to="/home" />
  )
    
  }
   
}
