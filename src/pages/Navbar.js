import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Layout from './Layout';

const NavbarContainer = styled.nav`
  height: 100vh;
  display: flex;
  
  .inner {
    min-width: 10vw;
    height: 100%;
    background-color: orange;

    li {
      cursor: pointer;
      padding: 6px 0;
    }

    #logo {
      font-size: 22px;
      font-weight: bold;
      padding-bottom: 6px;
    }

    #title {
      font-size: 18px;
      font-weight: bold;
      padding-bottom: 6px;
    }

    .items {
      /* height: 100%; */
    }
  }
  
  .outlet-box {
    width: 100vw;
  }
  
`;

function Navbar(props) {
  const [show, setShow] = useState(0);
  const navigate = useNavigate();

  // 로컬스토리지에 컴포넌트 번호를 저장하고 재렌더링 시 기존 번호 유지
  useEffect(() => {
    const showNum = localStorage.getItem('show');
    setShow(Number(showNum));
  }, []);

  const handleCommponent = (num) => {
    try {
      localStorage.setItem('show', num);
      setShow(num);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <NavbarContainer>
      <div className='inner'>
        <h2 className='cursor--pointer' id='logo' onClick={() => handleCommponent(0)}>Romin</h2>
        <h3 id='title'>functions</h3>
        <ul className='items'>
          <li onClick={() => handleCommponent(1)} title='텍스트 타이핑 효과'>Typing</li>
          <li onClick={() => handleCommponent(2)} title='텍스트 타이핑 효과 라이브러리'>TypingLib</li>
          <li onClick={() => handleCommponent(3)} title='페이지네이션'>Pagination</li>
          <li onClick={() => handleCommponent(4)} title='모달'>Modal</li>
          <li onClick={() => handleCommponent(5)} title='부트스트랩'>Bootstrap</li>
          <li onClick={() => handleCommponent(6)} title='.env'>.env</li>
          <li onClick={() => handleCommponent(7)} title='카카오맵'>KaKaoMap</li>
          <li onClick={() => handleCommponent(8)} title='세계지도'>WorldMap</li>
          <li onClick={() => navigate('/page')} title='동적 타이틀 변경'>DaynamicPageTitle</li>
        </ul>
      </div>
      <div className='outlet-box'>
        <Layout show={show}/>
      </div>
    </NavbarContainer>
  );  
}

export default Navbar;