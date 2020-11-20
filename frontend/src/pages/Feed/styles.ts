import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  min-height: calc(100vh - 70px);

  display: grid;
  grid-template-columns: 16% 46% 32%;
  grid-template-rows: 130px auto;
  grid-template-areas:
    'empty title sports'
    'categories main sidebar';
  column-gap: 3%;

  h1 {
    font-size: 26px;
    font-weight: 500;
  }
`;

export const MainTitle = styled.h1`
  grid-area: title;
  align-self: center;
`;

export const SportsTitle = styled.h1`
  grid-area: sports;
  align-self: center;
`;

export const Empty = styled.span`
  grid-area: empty;
  align-self: center;
`;

export const Categories = styled.div`
  grid-area: categories;
`;

export const Main = styled.div`
  grid-area: main;
`;

export const Sidebar = styled.div`
  grid-area: sidebar;

  p {
    margin-bottom: 0;
  }
`;

export const News = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  margin-bottom: 50px;

  img {
    border-radius: 20px;
    width: 98%;
    height: 400px;
    object-fit: cover;
    object-position: center;
  }

  h2 {
    padding: 40px 40px 30px;
    font-size: 20px;
    line-height: 26px;
    width: 100%;
  }
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  img {
    width: 20px;
    height: 20px;
  }

  h2 {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
`;
