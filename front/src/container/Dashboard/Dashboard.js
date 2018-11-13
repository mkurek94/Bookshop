import React, { Component } from 'react';

import ItemsContainer from '../ItemContainer/ItemsContainer';
import NextPageContainer from '../NextPageContainer/NextPageContainer';

class Dashboard extends Component {
    render() {
        const styles = {
            width: '100%',
            textAlign: 'center',
            padding: '30px'
        }
        return (
            <div style={ styles }>
                <ItemsContainer />
                <NextPageContainer />
            </div>
        );
    }
}

export default Dashboard;