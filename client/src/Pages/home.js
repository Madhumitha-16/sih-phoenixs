import React from 'react'
import Navbar from '../Components/Navbar'
import header from '../Assets/Images/home.jpg'
import project from '../Assets/Images/project.png'
import "../Pages/Styles/home.css"

export const Home = () => {
  return (
    <>
    <div className="home">
=        <Navbar />
        <div className='header'>
            <img src={project} width={800} height={800} />
        </div>
    </div>

    </>
  )
}
