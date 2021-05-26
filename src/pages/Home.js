import React,{useEffect, useState} from 'react'
import {Redirect} from 'react-router-dom'
import Navbar from '../Components/navbar'
import FeaturedSection from '../Components/featuredSection'
import HeroSection from '../Components/hero-section'
import firebase from 'firebase'
import CategoriesSection from '../Components/CategoriesSection'
import FindRoommatesContent from '../Components/FindRoommatesContent'
import Footer from '../Components/Footer'

export default function Home() {

    const [authState, setAuthState ] = useState("");
    console.log(authState)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (!user) {
            // <Redirect to="/" />
            setAuthState("Logged-out")
            // console.log("1")
          }else{
            // console.log("2")
            setAuthState("Logged-in")
          }
        });
      }, [])

    

    if(authState === "Logged-out"){
    return (
      <>
         <Redirect to="/" />
      </>
    )
    }else{
      return(
      <>
      <Navbar/>
      <HeroSection/>
      <FeaturedSection/>
      <CategoriesSection/>
      <FindRoommatesContent/>
      <Footer/>
      </>
      )
    }
}

