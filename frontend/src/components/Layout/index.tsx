import React from 'react';

import { Container } from './styles';

import Header from '../Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
