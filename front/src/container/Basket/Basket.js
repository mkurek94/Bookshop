import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as action from '../../store/action/index';

class Basket extends Component {
    render() {
        const style = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }

        const column = {
            display: 'flex',
            flexDirection: 'column'
        }

        const coverAuthor = {
            display: 'flex',
            flexDirection: 'row'
        }

        let items = 'Nie masz zadnych towarow w koszyku.';
        if(this.props.basket[0]) {
            items = this.props.basket.map(el => {
                return(
                    <div style={style} key={el.id}>
                        <div style={coverAuthor}>
                            <img src={el.cover} alt="cover" />
                            <div style={column}>
                                <span>{el.title}</span>
                                <span>{el.author}</span>
                            </div>
                        </div>
                        <span>{el.number}</span>
                        <span>{(el.price / 100).toFixed(2)} zl</span>
                        <button type='button' onClick={() => this.props.deleteItem(el.id)}>DELETE</button>
                    </div>
                );
            });
        }
        return(
            <div style={column}>
                <div style={style}>
                    <span>Produkt</span>
                    <span>Ilosc</span>
                    <span>Cena</span>
                </div>
                {items}
                <div style={style}>
                    <button type='button'><Link to='/'>Wróć do księgarni</Link></button>
                    <button type='button'><Link to='/contact'>Przejdź dalej</Link></button>
                </div>
            </div>
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