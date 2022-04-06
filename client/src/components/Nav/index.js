import React from "react";

function Nav({ currentPage, handlePageChange }) {
    return (
        <header className="col-12">
            <div className="col-2 p-3">
                <a
                    href='#about'
                    onClick={() => handlePageChange('About')}
                    className='text-light h1 text-decoration-none'
                >
                    Amir B
                </a>
            </div>
            <nav className="col-10 nav justify-content-around p-3">
                <ul className="flex-row navbar-nav nav-fill w-100">
                    <li className="mx-4 nav-item">
                        <a
                          href='#about'
                          onClick={() => handlePageChange('About')}
                          className={currentPage === 'About' ? 'text-primary' : 'text-light'}
                        >
                          About
                        </a>
                    </li>
                    <li className="mx-4 nav-item">
                        <a
                          href='#portfolio'
                          onClick={() => handlePageChange('Portfolio')}
                          className={currentPage === 'Portfolio' ? 'text-primary' : 'text-light'}
                        >
                          Portfolio
                        </a>
                    </li>
                    <li className="mx-4 nav-item">
                        <a
                          href='#contact'
                          onClick={() => handlePageChange('Contact')}
                          className={currentPage === 'Contact' ? 'text-primary' : 'text-light'}
                        >
                          Contact
                        </a>
                    </li>
                    <li className="mx-4 nav-item">
                        <a
                          href='#resume'
                          onClick={() => handlePageChange('Resume')}
                          className={currentPage === 'Resume' ? 'text-primary' : 'text-light'}
                        >
                          Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;
