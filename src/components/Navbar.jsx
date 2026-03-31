import React from 'react'
import './Navbar.css'


const Navbar = () => {
    return (
        <>
            <nav className="nav navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">PalmPay</a>

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
                </div>

                <div className="navbar-buttons">
                    <button className='login'>Log in</button>
                    <select name="" id="" className='countries'>
                        <option value="Global">Global</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Global">Global</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Global">Global</option>
                        <option value="Nigeria">Nigeria</option>
                    </select>
                </div>
            </nav>
        </>
    )
}

export default Navbar