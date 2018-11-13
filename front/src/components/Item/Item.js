import React from 'react';

const style = {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingRight: '2%'
}

const header = {
    fontSize: '1rem'
}

const desc = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '1rem'
}

const info = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}

const img = {
    height: '12rem'
}

const infoContainer = {
    display: 'flex',
    flexDirection: 'column'
}

const item = props => (
  <div style={style}>
    <h2 style={header}>{props.title}</h2>
    <span>{props.author}</span>
    <div style={desc}>
      <img style={img} src={props.cover} alt="poster" />
      <div style={info}>
        <div style={infoContainer}>
          <span>Liczba stron: </span>
          <span>{props.pages}</span>
        </div>
        <div style={infoContainer}>
          <span>Cena: </span>
          <span>{(props.price / 100).toFixed(2)} zl</span>
        </div>
        <div style={infoContainer}>
          <button type="button">Zamów</button>
          <button type="button">Dodaj do koszyka</button>
        </div>
      </div>
    </div>
  </div>
);

export default item;