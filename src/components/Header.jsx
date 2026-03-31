import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
        <div className='header'>
            <div className='textDiv'>
                <h1>The Smarter Way <br /> to Bank is Here</h1>
                <p>Tools to help you pay, earn, save and <br /> grow - all in one app</p>

                <div className='textDiv-btn d-flex gap-3'>
                    <a href=""><img src="src\assets\googlePlay.png" alt="" /></a>
                    <a href=""><img src="src\assets\appStore.png" alt="" /></a>
                </div>
            </div>

            <div className='headerImage'>
                <img src="https://static.chuanyinet.com/gaiaxTemplete/GroupHero4d45664d-962a-45.png?w=1920&q=100" alt="" />
            </div>
        </div>

        <div className='template'>
            <img src="https://static.chuanyinet.com/images/image%20349f3c9b380-30b6-46.png?w=384&q=100" alt="" />
            <img src="https://static.chuanyinet.com/images/image%20349f3c9b380-30b6-46.png?w=384&q=100" alt="" />
        </div>
    </>
  )
}

export default Header