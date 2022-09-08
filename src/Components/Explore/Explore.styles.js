import styled from 'styled-components'

export const Wrapper = styled.div`
margin-top: 15%;
`;

export const Cards = styled.div`
display: flex;
`;

export const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
transition: 0.3s;
width: 50%;
margin-right: 2%;

img {
    width: 100%;
}
`;


export const Card2 = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
transition: 0.3s;
width: 50%;
margin-left: 2%;

img {
    width: 100%;
}
`;

export const Container = styled.div`
padding: 2px 16px;
`;

export const P = styled.p`
display: flex;
flex-direction: row-reverse;
`;