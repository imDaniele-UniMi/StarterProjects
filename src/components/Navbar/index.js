import React,{useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
} from './NavbarElements'
import { animateScroll as scroll} from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav,setScrollNav]= useState(false);

    const changeNav= ()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    //Per rendere la navbar "solida" allo scoll
    useEffect(()=>{ 
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome= ()=>{
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Project</NavLogo>

                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            //offset a -80 perchè c'è il margin della navbar 
                            //non si attiverebbe la barra sotto nel punto giusto
                            offset={-80}>About me</NavLinks>
                        </NavItem>  
                        <NavItem>
                            <NavLinks to="discover"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Passion</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="tutorial"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Credits</NavLinks>
                        </NavItem>                  
                    </NavMenu>

                    {/*
                        Questa sezione è disponibile, basta de-commentarla, per ragioni personali ho preferito toglierla
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                    */}

                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
