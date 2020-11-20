import React from 'react';

import { Container } from './styles';

interface CardProps {
  width?: number;
  height?: number;
}

const Card: React.FC<CardProps> = ({ width, height, children }) => {
  return (
    <Container width={width} height={height}>
      {children}
    </Container>
  );
};

export default Card;
