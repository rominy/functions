import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import React from 'react';
import styled from 'styled-components';
import Typerwrite from 'typewriter-effect'

const StyledText = styled.div`
  padding: 20px;
  font-weight: bold;
  font-size: 50px;
  background-color: #000;
  color: #fff;

  .Typewriter__cursor {
    vertical-align: text-top;
  }
`;

// npm i typewriter-effect
function TypingLib(props) {
  
  return (
    <StyledText>
      <Typerwrite
        options={{
          strings: ['Hello', 'World'],
          autoStart: true,
          loop: true,
        }}
      />
    </StyledText>
  );
}

export default TypingLib;

// 옵션
// strings	String or Array	null	autoStart 옵션을 사용할 때 입력할 문자열
// cursor	String	파이프 문자	커서로 사용할 문자열 값
// delay	'natural' or Number	'natural'	입력할 때 각 문자 사이의 지연시간 추가하기
// deleteSpeed	'natural' or Number	'natural'	각 문자를 삭제하는 사이의 지연시간
// loop	Boolean	false	루프를 계속 할지 여부
// autoStart	Boolean	false	입력 문자열을 자동으로 시작할지 여부. strings 옵션을 제공해야 합니다.
// pauseFor	Number	1500	자동 시작 모드를 사용할 때 문자열을 입력한 후 일시 중지 시간
// devMode	Boolean	false	console logs 표시 여부
// skipAddStyles	Boolean	기본 타자기 CSS 스타일 추가를 스킵합니다.	
// wrapperClassName	String	'Typewriter__wrapper'	래퍼 요소의 클래스 이름입니다.
// cursorClassName	String	'Typewriter__cursor'	커서 요소의 클래스 이름입니다.
// stringSplitter	Function	문자열 분할 기능, 이모티콘을 분할하는 데 사용할 수 있습니다.	
// onCreateTextNode	Function	null	문자를 DOM에 추가하기 전에 문자에 대한 텍스트 노드를 생성하는 내부 메서드를 대체하는 콜백 함수입니다. 만약에 null을 반환하면, DOM에 아무것도 추가하지 않으므로 이를 처리하는 것은 사용자의 몫입니다.
// onRemoveNode	Function	null	노드를 제거하려고 할 때 콜백 함수. 첫 번째 매개변수는 객체 { node: HTMLNode, charater: string }입니다.