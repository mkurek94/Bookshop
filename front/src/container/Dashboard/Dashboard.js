import React, { Component } from 'react';

import SearchBar from '../../components/Searchbar/Searchbar';
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
                <SearchBar />
                <ItemsContainer />
                <NextPageContainer />
            </div>
        );
    }
}

export default Dashboard;