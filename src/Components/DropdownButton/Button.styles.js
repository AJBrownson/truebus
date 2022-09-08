import styled, { css } from 'styled-components'

export const ActionButtons = styled.div`
display: flex;
flex-direction: column;
// position: relative;
`;


export const Button = styled.button`
display: flex;
justify-content: space-between;
background: green;
padding: 0.5rem;
color: white;
border: transparent;
border-radius: 2px;
cursor: pointer;

${props => props.down && css`
    background: white;
    border: 1px solid black;
    color: black;
    margin-top: 3%;
  `}
`;



export const Dropdown = styled.div`
position: relative;
text-align: center;
width: 100%;
overflow: auto;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2)
`;