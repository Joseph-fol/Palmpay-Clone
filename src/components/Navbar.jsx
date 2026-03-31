import React from 'react'
import './Navbar.css'


const Navbar = () => {
    return (
        <>
            <nav className="nav navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">PalmPay</a>

                    <div className='nav-mobile-actions'>
                        <div className='country-picker country-picker-mobile'>

                            <span className='flag-ng' aria-hidden='true'></span>
                            <select name="" id="" className='countries countries-mobile'>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Global">Global</option>
                                <option value="Global">Tanzania</option>
                                <option value="Global">Ghana</option>
                                <option value="Global">Pakistan</option>
                                <option value="Global">Bangladesh</option>
                                <option value="Global">Uganda</option>
                                <option value="Global">Phillippines</option>
                            </select>
                        </div>

                        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>

                    <div className="nav-links collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Company</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Personal</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Business</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Impact</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Newsroom</a>
                            </li>
                        </ul>

                        <div className="navbar-buttons">
                            <button className='login'>Log in</button>
                            <div className='country-picker'>
                                <span className='flag-ng' aria-hidden='true'></span>
                                <select name="" id="" className='countries countries-desktop'>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Global">Global</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar