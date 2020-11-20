import styled, { css } from 'styled-components';

interface NavItemProps {
  isSelected: boolean;
}

export const Container = styled.header`
  padding: 0 5%;
  width: 100%;
  height: 70px;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -1px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const NavItem = styled.div<NavItemProps>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & + div {
    margin-left: 60px;
  }

  a {
    color: #222;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    svg {
      margin-right: 12px;
    }
  }

  ${(props) =>
    props.isSelected &&
    css`
      border-bottom: 2px solid #f7542e;

      a {
        color: #f7542e;
      }
    `}
`;

export const Search = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f8f9;
  border-radius: 20px;

  input {
    width: 200px;
    height: 100%;
    padding: 10px 5px 10px 20px;
    background: transparent;
    border: none;
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;
    color: #aaaaaa;

    &::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #ababab;
      opacity: 1; /* Firefox */
    }

    &:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: #ababab;
    }

    &::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #ababab;
    }
  }

  button {
    height: 100%;
    background: transparent;
    border: none;
    padding: 10px 20px 10px 0px;
  }
`;
