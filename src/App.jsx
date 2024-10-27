import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Footer from './components/Footer'
import { AppContext } from './context/AppContext'



const App = () => {

  const {fetchBlogPosts} = useContext(AppContext);
  
  useEffect(()=>{
    fetchBlogPosts();
  },[])

  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App
