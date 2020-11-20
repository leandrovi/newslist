import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiHomeAlt, BiLogIn, BiLayerPlus, BiSearch } from 'react-icons/bi';
import { AiOutlineFire } from 'react-icons/ai';

import { Container, Nav, NavItem, Search } from './styles';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <Container>
      <h1>NewsList</h1>

      <Nav>
        <NavItem isSelected={location.pathname === '/'}>
          <Link to="/">
            <BiHomeAlt size={20} />
            Home
          </Link>
        </NavItem>
        <NavItem isSelected={location.pathname === '/trending'}>
          <Link to="/trending">
            <AiOutlineFire size={20} />
            Trending
          </Link>
        </NavItem>
        <NavItem isSelected={location.pathname === '/signin'}>
          <Link to="/signin">
            <BiLogIn size={20} />
            Sign In
          </Link>
        </NavItem>
        <NavItem isSelected={location.pathname === '/signup'}>
          <Link to="/signup">
            <BiLayerPlus size={20} />
            Sign Up
          </Link>
        </NavItem>
      </Nav>

      <Search>
        <input type="text" placeholder="Pesquise qualquer coisa" />

        <button type="button">
          <BiSearch size={20} color="#ababab" />
        </button>
      </Search>
    </Container>
  );
};

export default Header;
