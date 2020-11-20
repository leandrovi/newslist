import styled from 'styled-components';

interface ContainerProps {
  width?: number;
  height?: number;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  /* height: ${(props) => (props.height ? `${props.height}px` : '')}; */

  background: #fff;
  padding: 40px;
  border-radius: 20px;
`;

export const CardTitle = styled.h2`
  font-size: 20px;
  font-weight: 600px;
  color: #222;
  margin-bottom: 40px;
`;

export const CardText = styled.p`
  color: #838383;
  font-size: 16px;
  font-weight: 500;
  margin: 20px 0;
`;
