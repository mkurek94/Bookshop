import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from '../../store/action/index';
import styled from 'styled-components';

class Basket extends Component {
    render() {
        const StyledWrapper = styled.div`
            display: flex;
            justify-content: space-between;
        `;

        const Column = styled.div`
            display: flex;
            flex-direction: column;
        `;

        const CoverAuthor = styled.div`
            display: flex;
        `;

        let items = 'Nie masz zadnych towarow w koszyku.';
        if(this.props.basket[0]) {
            items = this.props.basket.map(el => {
                return(
                    <StyledWrapper key={el.id}>
                        <CoverAuthor>
                            <img src={el.cover} alt="cover" />
                            <Column>
                                <span>{el.title}</span>
                                <span>{el.author}</span>
                            </Column>
                        </CoverAuthor>
                        <span>{el.number}</span>
                        <span>{(el.price / 100).toFixed(2)} zl</span>
                        <button type='button' onClick={() => this.props.deleteItem(el.id)}>DELETE</button>
                    </StyledWrapper>
                );
            });
        }
        return(
            <Column>
                <StyledWrapper>
                    <span>Produkt</span>
                    <span>Ilosc</span>
                    <span>Cena</span>
                </StyledWrapper>
                {items}
                <StyledWrapper>
                    <button type='button'><Link to='/'>Wróć do księgarni</Link></button>
                    <button type='button'><Link to='/contact'>Przejdź dalej</Link></button>
                </StyledWrapper>
            </Column>
        );
    }
}

const mapStateToProps = state => {
    return {
        basket: state.basket
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: (id) => dispatch(action.removeItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);