import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIconLink,
    SocialIcons
} from './FooterElements'
import {FaFacebook,FaInstagram,FaTwitter,FaYoutube} from 'react-icons/fa'

const Footer = () => {
    const toggleHome= ()=>{
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>

                <FooterLinksContainer>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Footer section 1</FooterLinkTitle>
                            <FooterLink to="/">footer section 1 scope</FooterLink>
                            <FooterLink to="/">footer section 1 scope</FooterLink>
                            <FooterLink to="/">footer section 1 scope</FooterLink>
                            <FooterLink to="/">footer section 1 scope</FooterLink>
                            <FooterLink to="/">footer section 1 scope</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Footer section 2</FooterLinkTitle>
                            <FooterLink to="/">footer section 2 scope</FooterLink>
                            <FooterLink to="/">footer section 2 scope</FooterLink>
                            <FooterLink to="/">footer section 2 scope</FooterLink>
                            <FooterLink to="/">footer section 2 scope</FooterLink>
                            <FooterLink to="/">footer section 2 scope</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Footer section 3</FooterLinkTitle>
                            <FooterLink to="/">footer section 3 scope</FooterLink>
                            <FooterLink to="/">footer section 3 scope</FooterLink>
                            <FooterLink to="/">footer section 3 scope</FooterLink>
                            <FooterLink to="/">footer section 3 scope</FooterLink>
                            <FooterLink to="/">footer section 3 scope</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Footer section 4</FooterLinkTitle>
                            <FooterLink to="/">footer section 4 scope</FooterLink>
                            <FooterLink to="/">footer section 4 scope</FooterLink>
                            <FooterLink to="/">footer section 4 scope</FooterLink>
                            <FooterLink to="/">footer section 4 scope</FooterLink>
                            <FooterLink to="/">footer section 4 scope</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>

                        <SocialLogo to='/' onClick={toggleHome}>
                            Project
                        </SocialLogo>

                        <WebsiteRights>
                            Powered by Daniele Zappalà / {new Date().getFullYear()} / Thanks to Brian Design
                        </WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blank" arial-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com" target="_blank" arial-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com" target="_blank" arial-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com" target="_blank" arial-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>

                    </SocialMediaWrap>
                </SocialMedia>
                
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer