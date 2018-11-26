import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const searchbar = props => {
    const StyledForm = styled.form`
        display: flex;
        justify-content: center;
    `;

    const StyledInput = styled.input`
        width: 50%;
        height: 30px;
    `;

    const StyledButton = styled.button`
        width: 5%;
        padding: 2px;
        box-sizing: border-box;
    `;

    return <StyledForm>
        <StyledInput type="text" placeholder="Search..." />
        <StyledButton type="submit">
          Search
        </StyledButton>
        <StyledButton type="button">
          <Link to="/basket">Koszyk</Link>
        </StyledButton>
      </StyledForm>;
}

export default searchbar;