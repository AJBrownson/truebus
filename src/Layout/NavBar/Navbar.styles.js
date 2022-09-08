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
    width: 100%;
    height: 75px;
    left: 0px;
    top: 0px;
}
`;


export const NavLogo = styled.div`
// display: flex;
// justify-content: space-between;
// align-items: center;
transform: translate(500%, 68%);
color: white;
cursor: pointer;

& > img {
    width: 50px;
    height: 50px;
}

@media screen and (max-width: 768px) {
    font-size: 1.5rem;

    & > img {
        width: 30px;
        height: 30px;
    }
}
`;



export const HamburgerIcon = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(100%, 68%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
}
`;



// export const Menu = styled.div`
// display: flex;
// flex-direction: row;

// `;


export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;


@media screen and (max-width: 768px) {
    text-align: left;
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 90vh;
    // position: absolute;
    top: 60px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #2569A8;
    z-index: 10;
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