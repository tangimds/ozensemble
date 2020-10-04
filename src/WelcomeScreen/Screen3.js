import React from 'react';
import TextStyled from '../components/TextStyled';
import { ScreenBgStyled, Title, SubTitle, StyledScreen3 } from './styles';

const Screen3 = () => (
  <ScreenBgStyled>
    <StyledScreen3 />
    <Title>
      <TextStyled color="#4030a5">Faites-vous accompagner par un professionnel</TextStyled>
    </Title>
    <SubTitle>
      <TextStyled color="#191919">
        Discutez gratuitement avec un professionnel et obtenez des conseils personnalisés
      </TextStyled>
    </SubTitle>
  </ScreenBgStyled>
);

export default Screen3;
