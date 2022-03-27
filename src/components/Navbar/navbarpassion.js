import React,{useState, useEffect} from 'react'
import { IconContext } from 'react-icons/lib'
import {MdArrowBack} from 'react-icons/md'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavMenu, 
    NavItem, 
    NavLinks,
} from './NavbarElements'

const NavbarPassion = ({toggle}) => {
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
    
    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    
                    <NavLogo to="/"><MdArrowBack />Back</NavLogo>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="tech" 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            //offset a -80 perchè c'è il margin della navbar 
                            //non si attiverebbe la barra sotto nel punto giusto
                            offset={-80}>Technoloy</NavLinks>
                        </NavItem>  
                        <NavItem>
                            <NavLinks to="music"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Music</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="astronomy"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Astronomy</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="sport"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Sport</NavLinks>
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

export default NavbarPassion
