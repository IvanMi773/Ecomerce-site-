// dependensies import
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

// images import
import logo from '../logo.png'

// styled components
import { ButtonContainer } from './Button'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-md navbar-dark px-md-5">
                <Link to="/">
                    <img src={logo} className="navbar-brand" style={{ width: '50px', height: '55px' }} />
                </Link>

                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link" >Products</Link>
                    </li>
                </ul>

                <Link to="cart" className="ml-auto" >
                    <ButtonContainer>
                        My cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav `
    background: var(--mainBlue);

    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;
