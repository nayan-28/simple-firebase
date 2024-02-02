import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link><br></br>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Header;
