import React from 'react';
import './Header.css'

const Header = () => {
    return ( 
        <>
        <nav className="navbar navbar-dark bg-primary navbar-toggler">
            <div className="container-fluid">
            <h2>ToDo App</h2>
            <h1>Plan your day just here, just now!</h1>
            </div>
        </nav>
        </>
     );
}
 
export default Header;