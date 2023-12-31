import styled from "styled-components";
import React from 'react';
import hamburguer from '../../imgs/burguer.png'
import logo from '../../imgs/galoBanner.png'
import { useState, useEffect } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as Scroll from 'react-scroll';

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
    top: 2.2%;
    left: 1.5%;
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
    a:hover {
        color: #0f62fe;
        transition: 0.3s;
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
a:hover {
    color: #0f62fe;
    transition: 0.3s;
}
`

function Header() {
    const [loginText, setLoginText] = useState("Login");

    useEffect(() => {
        const userLog = localStorage.getItem("userLog");
        if (userLog === "1") {
            setLoginText("Logout");
        } else {
            setLoginText("Login");
        }
    }, []);

    const handleLoginClick = () => {
        const userLog = localStorage.getItem("userLog");

        if (userLog === "1") {
            localStorage.setItem("userLog", JSON.stringify("0"));
            setLoginText("Login");
        }
    };

    const { scroller } = Scroll;
    const navigate = useNavigate();

    const scrollToAnchor = (elementName) => {
        setTimeout(() => {
            scroller.scrollTo(elementName, {
                duration: 0,
                delay: 0,
                smooth: true,
                offset: -100
            });
        }, 200);
    };

    const handleNavLinkClick = (elementName, route) => {
        scrollToAnchor(elementName);
        if (route) {
            navigate(route);
        }
    };


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
                    ></LogoSideBarimg>
                </LogoHeader>
                <Nav>
                    <NavHeader>
                        <li onClick={() => handleNavLinkClick("Home")}><RouterLink to="/">Home</RouterLink></li>
                        <li onClick={() => handleNavLinkClick("Problema")}><RouterLink to="/">Problema</RouterLink></li>
                        <li onClick={() => handleNavLinkClick("Causa")}><RouterLink to="/">Causas</RouterLink></li>
                        <li onClick={() => handleNavLinkClick("Solucao")}><RouterLink to="/">Solução</RouterLink></li>
                        <li onClick={() => handleNavLinkClick("Sobre")}><RouterLink to="/Contato">Sobre Nós</RouterLink></li>
                        <li onClick={() => handleNavLinkClick("Contato")}><RouterLink to="/Contato">Contato</RouterLink></li>
                    </NavHeader>
                </Nav>
                <LoginHeader>
                    <ul>
                        <LoginAnchor><RouterLink to="/Sign-in" onClick={handleLoginClick}>{loginText}</RouterLink></LoginAnchor>
                    </ul>
                </LoginHeader>
            </Head>
        </div>
    );
}

export default Header