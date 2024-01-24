import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Main from './Main';

const NavbarContainer = styled.nav`
  height: 100vh;
  display: flex;
  
  li {
    cursor: pointer;
  }
  
  .inner {
    min-width: 10vw;
    height: 100%;
    background-color: orange;

    .items {
      /* height: 100%; */

      #logo {
        font-weight: bold;
      }
    }
  }
  
  .outlet-box {
    width: 100vw;
  }
  
`;

function Navbar(props) {
  const navigate = useNavigate();
  const [show, setShow] = useState(0);

  return (
    <NavbarContainer>
      <div className='inner'>
        <ul className='items'>
          <li id='logo' >Romin</li>
          <li>functions</li>
          <li onClick={() => setShow(1)} title='텍스트 타이핑 효과' >Typing</li>
          <li onClick={() => setShow(2)} title='텍스트 타이핑 효과 라이브러리' >TypingLib</li>
        </ul>
      </div>
      <div className='outlet-box'>
        <Main show={show}/>
      </div>
    </NavbarContainer>
  );  
}

export default Navbar;