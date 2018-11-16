import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/action/index';

import Item from '../../components/Item/Item';
import Aux from '../../hoc/AuxContainer';

class ItemsContainer extends Component {

    componentDidMount() {
        this.props.onBooksInit(this.props.page);
        setTimeout(() => {
            console.log(this.props);
        }, 2000);
    }

    // shouldComponentUpdate(nextProps) {
    //     return nextProps.page !== this.props.page;
    //     // console.log(nextProps, nextState);
    // }

    componentDidUpdate() {
        this.props.onBooksInit(this.props.page);
    }

    render() {
        const style = {
            display: 'flex',
            flexWrap: 'wrap',
            padding: '0 5rem'
        };

        let book;
        if(this.props.books) {
        book = this.props.books.map(el => {
            return (
                <Aux key={el.id}>
                    <Item
                        title={el.title}
                        author={el.author}
                        cover={el.cover_url}
                        pages={el.pages}
                        price={el.price}
                        addItem={() => this.props.addItem(el.id, el.title, el.author, el.cover_url, el.price, 1)}
                    />
                </Aux>
            )
        });
    }
        return (
        <div style={style}>
            {book}
        </div>);
    };
}

const mapStateToProps = state => {
    return {
        books: state.books,
        page: state.page
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onBooksInit: (page) => dispatch(action.initBooks(page)),
        addItem: (id, title, author, cover, price, number) => dispatch(action.addItem(id, title, author, cover, price, number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);