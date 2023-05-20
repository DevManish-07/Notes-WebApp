import React from 'react'
import styled from 'styled-components'
import { FaPlus } from "react-icons/fa";

function Button({ title, icon, ...props }) {
    return (
        <ButtonContainer {...props}>
            {icon ? icon : <FaPlus />}
            {title}
        </ButtonContainer>
    )
}

const ButtonContainer = styled.div`
    height: 50px;
    background: rgb(222 222 222);
    font-size: 18px;
    display: flex;
    padding: 14px;
    align-items: center;
    gap: 20px;
    border-radius: 6px; 
    cursor: pointer;
`;

export default Button;