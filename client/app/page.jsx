import Image from 'next/image'
import Header from './components/header'
import Login from './components/login'
import Sidebar from './components/sidebar'
import Feed from './components/feed'
import Widgets from './components/widgets'

export default function Home() {
  if (!false) {
    // return(<Login/>)
  }

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Header></Header>
    
      <main className='flex'>
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
