import React from 'react';
import styled from 'styled-components';
import TypingLib from '../components/functions/TypingLib';
import Typing from '../components/functions/Typing';
import Pagination from '../components/functions/Pagination';
import Home from './Home';
import Modal from '../components/functions/Modal';
import Bootstrap from '../components/functions/Bootstrap';
import EnvFile from '../components/functions/EnvFile';
import KakaoMap from '../components/functions/KakaoMap';
import WorldMap from '../components/functions/WorldMap';

const LayoutContainer = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Layout(props) {
  const { show } = props;

  return (
    <>
      <LayoutContainer>
        {show === 0 && <Home />}
        {/* 텍스트 타이핑 효과 */}
        {show === 1 && <Typing />}
        {show === 2 && <TypingLib />}
        {/* 페이지네이션 */}
        {show === 3 && <Pagination />}
        {/* 모달 */}
        {show === 4 && <Modal />}
        {/* 부트스트랩 */}
        {show === 5 && <Bootstrap />}
        {/* .env */}
        {show === 6 && <EnvFile />}
        {/* 카카오맵 */}
        {show === 7 && <KakaoMap />}
        {/* amCharts4 대한민국 지도 */}
        {show === 8 && <WorldMap />}
      </LayoutContainer>
    </>
  );
}

export default Layout;