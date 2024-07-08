"use client";

import Image from 'next/image'

import Login from './components/Landing/login'
import SignUp from './components/Landing/sign-up'

import Header from './components/Home/header'
import Sidebar from './components/Home/sidebar'
import Feed from './components/Home/feed'
import Widgets from './components/Home/widgets'

export default function Home() {
  if (!false) {
    // return(<Login/>)
    // return(<SignUp/>)
  }

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Header></Header>
    
      <main className='flex flex-row justify-between'>
        {/* Sidebar */}
        <Sidebar></Sidebar>

        {/* Feed */}
        <Feed></Feed>

        {/* Widgets */}
        <Widgets></Widgets>
        
      </main>
    </div>
  )
}
