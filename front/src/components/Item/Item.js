import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 2%;
`;

const Header = styled.h2`
    font-size: 1rem;
`;

const Description = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 1rem;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Image = styled.img`
    height: 12rem;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const item = props => (
  <StyledWrapper>
    <Header>{props.title}</Header>
    <span>{props.author}</span>
    <Description>
      <Image src={props.cover} alt="poster" />
      <Info>
        <InfoContainer>
          <span>Liczba stron: </span>
          <span>{props.pages}</span>
        </InfoContainer>
        <InfoContainer>
          <span>Cena: </span>
          <span>{(props.price / 100).toFixed(2)} zl</span>
        </InfoContainer>
        <InfoContainer>
          <button type="button">Zamów</button>
          <button type="button" onClick={props.addItem}>
            Dodaj do koszyka
          </button>
        </InfoContainer>
      </Info>
    </Description>
  </StyledWrapper>
);

export default item;