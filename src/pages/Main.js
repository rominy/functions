import React from 'react';
import styled from 'styled-components';
import TypingLib from '../components/functions/TypingLib';
import Typing from '../components/functions/Typing';

const MainContainer = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Main(props) {
  const { show } = props;

  return (
    <MainContainer>
      {/* 텍스트 타이핑 효과 */}
      {show === 1 && <Typing />}
      {show === 2 && <TypingLib />}
    </MainContainer>
  );
}

export default Main;