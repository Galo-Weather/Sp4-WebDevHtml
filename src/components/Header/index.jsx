import styled from "styled-components";
import React from 'react';
import hamburguer from '../../imgs/burguer.png'
import logo from '../../imgs/galoBanner.png'
import { useState } from "react";
import { Link } from 'react-router-dom';

const Head = styled.header`
    font-family: "Montserrat", sans-serif;
    position: fixed;
    z-index: 50;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    height: 100%;
    padding: 1em 2em 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    background: white;
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.1);
    transition-property: left;
    transition-duration: 0.5s;

    @media (min-width: 1100px) {
          translate: 0 0;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          left: 0;
          transition-property: left;
          transition-duration: 0s;
          height: 5.5em;
          padding: 1em;
          visibility: visible;
    }
`
const Burguer = styled.div`
    position: fixed;
    width: 0;
    height: 0;
    z-index: 100;
    top: 2%;
    left: 5%;
    visibility: visible;
    opacity: 1;
    
    @media (min-width: 1100px) {
        visibility: hidden;
        opacity: 0;
    }
`
const Hamburguer = styled.img`
    width: 41.17px;
    cursor: pointer;

`
const LogoHeader = styled.div`
display: flex;
justify-content: space-between;
`
const LogoSideBarimg = styled.img`
    margin: auto auto auto 2em;
    width: 10em;
`
const Nav = styled.div`
`
const NavHeader = styled.ul`
    padding-top: 1.5em;

    li{
        text-align: start;
        list-style: none;
        padding: 0.5em;
        font-size: 1.3rem;
    }

    a{
        text-decoration: none;
        color: black;
    }

    @media (min-width: 1100px) {
        display: flex;
        padding: 0;
        text-align: center;
    }
`
const LoginHeader = styled.div`
    position: absolute;
    bottom: 2%;
    text-align: start;
    padding: 0.5em;
    margin: 0;

    @media (min-width: 1100px) {
        position: unset;
        margin-right: 1em;
        ul{
            padding: 0;
            margin: 0;
        }
    }

`

const LoginAnchor = styled.li`
list-style: none;

a{
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
}
`

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <Burguer>
                <Hamburguer
                    src={hamburguer}
                    alt='burguer'
                    onClick={toggleMenu}></Hamburguer>
            </Burguer>
            <Head isOpen={menuOpen}>
                <LogoHeader>
                    <LogoSideBarimg
                        src={logo}
                        alt='logo'
                        className='logo-img'
                    ></LogoSideBarimg>
                </LogoHeader>
                <Nav>
                    <NavHeader>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Problema</Link></li>
                        <li><Link to="/Seila">Causas</Link></li>
                        <li><Link to="/Soluçao">Solução</Link></li>
                        <li><Link>Sobre Nós</Link></li>
                        <li><Link>Contato</Link></li>
                    </NavHeader>
                </Nav>
                <LoginHeader>
                    <ul>
                        <LoginAnchor><Link to="/Sign-in">Login</Link></LoginAnchor>
                    </ul>
                </LoginHeader>
            </Head>
        </div>
    );
}

export default Header

{/* <li>
                            <ScrollLink
                            activeClass="active"
                            to="AboutUs"
                            spy={true}
                            offset={-50}
                            duration={500}>
                            <a href="#equipe">Sobre Nós</a>
                            </ScrollLink>
                        </li> */}