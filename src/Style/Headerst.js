import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 20%;
`;

export const Head = styled.div`
    display:flex;
    background-color:#FFEAEA;
    height:5vh;
    align-items:center;
    justify-content:space-around;
`;

export const Iconimg = styled.div`
    width:4vw;
    height:4vh;
    svg{
        width:4vw;
        height:4vh;
    }
`;

export const Menulist = styled.div`
    display:flex;
    justify-content:space-between;
    width:35vh;
    font-size:1.4rem;
    font-weight:400;

    a{
        text-decoration:none;
        color:#573719;
        display:flex;
        justify-content:space-between;
    }
`;


