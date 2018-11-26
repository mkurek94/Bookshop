import React, { Component } from 'react';
import { connect } from "react-redux";
import * as action from "../../store/action/index";
import styled from 'styled-components';

class NextPageContainer extends Component {
    nextPageHandler = () => {
        let page = this.props.page;
        page++;
        this.props.changePage(page);
    }

    prevPageHandler = () => {
        let page = this.props.page;
        page--;
        this.props.changePage(page);
    }

    render() {

        const Button = styled.button`
            width: '2rem',
            height: '2rem',
            border: '2px solid #000',
            backgroundColor: 'transparent'
        `;

        return (
            <div>
                <Button onClick={this.prevPageHandler}/>
                <Button>{this.props.page}</Button>
                <Button onClick={this.nextPageHandler}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        page: state.page
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changePage: (page) => dispatch(action.setPages(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NextPageContainer);