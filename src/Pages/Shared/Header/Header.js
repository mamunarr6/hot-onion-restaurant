import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../../images/logo2.png';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Header.css';
import { Container } from '@mui/material';

const Header = () => {
    return (
        <Container>
            <div className="header">
                <div className="header-logo">
                    <img src={logo2} alt="" />
                </div>
                <div className="header-link">
                    <Link className="link" ><ShoppingCartOutlinedIcon className="shopping-cart-icon" /></Link>
                    <Link className="link" to="/login">Login</Link>
                    <Link className="link signup" to="/signup">Sign up</Link>
                </div>
            </div>
        </Container>
    );
};

export default Header;