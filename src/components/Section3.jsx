import React from 'react'
import './Section2.css'

const Section3 = () => {
  return (
    <>
        <section className='section2-content bg-white'>
                <img className='imageSection' src="https://static.chuanyinet.com/gaiaxTemplete/man2fbe4333-1784-4b.jpg?w=1920&q=100" alt="" />

                <div className='textSection'>
                    <h1 className='text-end'>Earn up to 20% on your savings</h1>
                    <div className='text-description'>
                        <p className='lh-base text-end ps-5' style={{fontSize: "27px", color: "#490181"}}>You work hard for your money. We work just as hard for you. Pick from <span style={{color: "#8f00ff"}}>flexible and fixed plans</span>  to help you reach your goals faster.</p>
                    </div>
                    <button className='fs-5'>Interest paid daily. Withdraw anytime.</button>
                </div>
            </section>
    </>
  )
}

export default Section3