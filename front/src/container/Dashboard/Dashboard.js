import React, { Component } from 'react';
import styled from 'styled-components';

import ItemsContainer from '../ItemContainer/ItemsContainer';
import NextPageContainer from '../NextPageContainer/NextPageContainer';

class Dashboard extends Component {
    render() {
        const StyledWrapper = styled.div`
            width: 100%;
            text-align: center;
            padding: 30px;
        `;

        return (
            <StyledWrapper>
                <ItemsContainer />
                <NextPageContainer />
            </StyledWrapper>
        );
    }
}

export default Dashboard;