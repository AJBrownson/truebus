import styled from 'styled-components'


export const Wrapper = styled.div`
border-bottom-left-radius: 50px;
height: 80vh;
`;



export const Nav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: #2569A8;
height: 80px;


@media screen and (max-width: 768px) {
    
}
`;


export const NavLogo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
font-size: 2rem;
font-weight: 600;
color: white;

& > img {
    width: 50px;
    height: 50px;
}

@media screen and (max-width: 768px) {

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
height: 100%;
`;

export const Button = styled.a`
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 7rem;
background: transparent;
color: white;
border: 2px solid white;
align-items: center;
cursor: pointer;
`;