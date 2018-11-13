import React, { Component } from 'react';
import Aux from '../../hoc/AuxContainer';

import SearchBar from '../../components/Searchbar/Searchbar';

class Layout extends Component {
    render() {
        return(
            <Aux>
                <SearchBar />
                <div>{this.props.children}</div>
            </Aux>
        );
    }
}

export default Layout;