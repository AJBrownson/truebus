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
img {
    width: 30px;
    height: 30px;
}
`

export const Span1 = styled.span`
padding-left: 1rem;
`;


export const Span2 = styled.span`
padding-right: 1rem;
`;