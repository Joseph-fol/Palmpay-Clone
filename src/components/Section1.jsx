import React from 'react'
import './Section1.css'

const Section1 = () => {
    return (
        <>
            <section className='section1'>
                <h1>Built For People Going Places</h1>
                <p>Earn more, save smarter, and level up your life </p>
                <div className='section-div'>
                    <div className='mt-5'>
                        <div className='section1-text'>
                            <h3>Unlimited Free Transfer</h3>
                            <p>Fast, free & reliable transfers to other PalmPay users and banks </p>
                        </div>
                        <div className='section1-text'>
                            <h3>Up to 20% Savings Interest</h3>
                            <p>Earn interest daily, withdraw anytime </p>
                        </div>
                        <div className='section1-text'>
                            <h3>Cashback on bills & more</h3>
                            <p>Get rewarded for your everyday spending</p>
                        </div>
                    </div>

                    <div className='section1-image'>
                        <img src="https://static.chuanyinet.com/gaiaxTemplete/skatedc7a5674-a34a-4e.png?w=1920&q=100" alt="" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Section1