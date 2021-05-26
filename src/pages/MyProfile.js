import React from 'react'
import Navbar from '../Components/navbar'
import ProfileCard from '../Components/ProfileCard'
import MyListings from '../Components/MyListings'

export default function MyProfile() {
    return (
        <div>
        <Navbar/>
        <ProfileCard/>
        <MyListings/>
        </div>
    )
}
