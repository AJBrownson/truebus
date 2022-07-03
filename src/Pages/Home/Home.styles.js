import styled, { css } from 'styled-components'


export const Wrapper = styled.div`

@media screen and (max-width: 768px) {
    margin-top: 20%;
    // padding-left: 0.5rem;
    // padding-right: 0.5rem;
}
`;


export const HeroComponent = styled.div`
display: flex;
margin-top: 5%;
margin-left: 20%;
width: 100%;

img {
    width: 100%;
    height: 100%;
}


@media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
    position: relative;
    top: 0;
    left: 0;

    img {
        width: 100%;
        position: relative;
        border-radius: 0;
    }
}
`;


export const CTA = styled.div`

// @media screen and (max-width: 768px) {
//     position: absolute;
//     width: 90%;
//     margin: auto;
//     height: 20%;
//     top: 40%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     display: flex;
//     flex-direction: column;
   
// }

@media screen and (max-width: 768px) {
    position: absolute;
    margin: -1.5rem auto;
    width: 100%;
    align-items: center;
    justify-content: center;
}
`;



export const Action =  styled.p`

@media screen and (max-width: 768px) {
    display: block;
    // border-radius: 3px;
    padding: 0.5rem 5rem;
    margin: 0.5rem auto;
    width: 9rem;
    background: transparent;
    color: black;
    border: 2px solid grey;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.09);


    ${props => props.primary && css`
        background: green;
        border: 2px solid green;
        color: white;
    `}

    > span {
        display: flex;
        justify-content: center;
    }
}
`;



export const ActionDropDown = styled.div`

@media screen and (max-width: 768px) {
    position: absolute;
    top: 90%;
    left: 0;
    margin-left: 34px;
    margin-right: 34px;
    text-align: center;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.09);

    > span {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}
`;




export const Button = styled.button`
border-radius: 3px;
padding: 10px 22px;
cursor: pointer;
`;
