import React, { Component } from 'react';
import { connect } from 'react-redux';

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

        let items = this.props.basket.map(el => {
            return(
                <div style={style}>
                    <div style={coverAuthor}>
                        <img src={el.cover} alt="cover" />
                        <div style={column}>
                            <span>{el.title}</span>
                            <span>{el.author}</span>
                        </div>
                    </div>
                    <span>1</span>
                    <span>{(el.price / 100).toFixed(2)} zl</span>
                </div>
            );
        })
        return(
            <div style={column}>
                <div style={style}>
                    <span>Produkt</span>
                    <span>Ilosc</span>
                    <span>Cena</span>
                </div>
                {items}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        basket: state.basket
    }
}

export default connect(mapStateToProps)(Basket);