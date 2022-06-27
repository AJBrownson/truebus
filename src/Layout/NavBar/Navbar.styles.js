import styled from 'styled-components'


export const Wrapper = styled.div`

`;



export const Nav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: #2569A8;
height: 80px;


@media screen and (max-width: 768px) {
    position: absolute;
    width: 375px;
    height: 45px;
    left: 0px;
    top: 0px;
}
`;


export const NavLogo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 2rem;
font-weight: 600;
color: white;
cursor: pointer;

& > img {
    width: 50px;
    height: 50px;
}

@media screen and (max-width: 768px) {

}
`;



export const HamburgerIcon = styled.div`
display: none;


@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 68%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;



export const Menu = styled.div`
display: flex;
flex-direction: row;

`;


export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;


@media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #fff;
}
`;



export const NavItem = styled.li`
height: 80px;
color: white;
`;



export const NavLinks = styled.div`
display: flex;
align-items: center;
text-decoration: none;
list-style: none;
padding: 0.5rem 1rem;
height: 80%;
cursor: pointer;
`;

export const Button = styled.a`
border-radius: 3px;
padding: 10px 22px;
margin: 0.5rem 1rem;
width: 7rem;
background: transparent;
color: white;
border: 2px solid white;
align-items: center;
cursor: pointer;
`;