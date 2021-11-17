import React from 'react';
import styled from 'styled-components';

const Vote = ({name, btncolor, fontcolor}) => {
    return (
        <>
                <Button type="button" btncolor={btncolor} fontcolor={fontcolor}>
                    {name}
                </Button>
        </>
    );
};

const Button = styled.button`

    width:7vw;
    height:5.2vh;
    font-size:1.4rem;
    font-weight:bold;
    border-radius:10px;
    border:none;

    margin-right:3vh;

    color: ${
        props => props.fontcolor || null
    };

    background-color: ${
        props => props.btncolor || null
    };
`;

export default Vote;