import React from 'react';

const searchbar = props => {
    const styles = {
        display: 'flex',
        justifyContent: 'center',
    }

    const styleInput = {
        width: '50%',
        height: '30px'
    }

    const styleButton = {
        width: '5%',
        padding: '2px',
        boxSizing: 'border-box'
    }

    return (
        <form style={styles}>
            <input type='text' placeholder='Search...' style={ styleInput } />
            <button type='submit' style={ styleButton }>Search</button>
        </form>
    );
}

export default searchbar;