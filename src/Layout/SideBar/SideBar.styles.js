import styled from "styled-components";


export const Wrapper = styled.div`
background-color: #2569A8;
width: 60%;
height: 100vh;
position: absolute;
top: 0;
// left: ${({click}) => (click ? 0 : '-100%')};
`;


export const Nav = styled.nav`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: #2569A8;
height: 80px;
width: 100%;
height: 75px;
left: 0px;
top: 0px;
}
`;


export const Menu = styled.div`
display: block;
`;


export const List = styled.ul`
list-style: none;
`


export const ListItem = styled.li`
height: 80px;
color: white;
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