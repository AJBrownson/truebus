import styled from 'styled-components'


export const Samp = styled.div`
position: relative;
`;


export const Wrapper = styled.div`

@media screen and (max-width: 768px) {
    margin-top: 20%;
    // padding-left: 0.5rem;
    // padding-right: 0.5rem;
}
`;


export const Div = styled.div`
padding-left: 0.5rem;
padding-right: 0.5rem;
`;


export const HeroComponent = styled.div`
display: flex;
margin-top: 5%;
margin-left: 20%;
width: 100%;
height: 100%;

img {
    width: 100%;
    height: 100%;
}


@media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 10px;
    top: 0;
    left: 0;
}
`;


export const Card = styled.div`
display: flex;
flex-direction: column;
width: 100%;
box-shadow: 0px 4px 8px 4px rgba(0, 0, 0, 0.2);
`;