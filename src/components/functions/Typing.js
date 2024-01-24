import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  padding: 20px;
  font-weight: bold;
  font-size: 50px;
  background-color: #000;
  color: #fff;

  @keyframes blinking {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
  }

  &::after {
    content: '';
    font-size: 40px;
    padding: 0 4px;
    border-right: 5px solid #fff;
    animation: blinking 1s infinite;
  }
`;

function Typing(props) {
  const [text, setText] = useState('');
  const [count, setCount] = useState(1);
  const example = 'Hello, World!'

  useEffect(() => {
    const typing = setInterval(() => {
      if (count > example.length) {
        setText(example.slice(0, count));
        setCount(1);
      } else {
        setText(example.slice(0, count));
        setCount(count + 1);
      }
    }, 300);

    return () => {
      clearInterval(typing);
    }
  }, [count])
  
  return (
    <StyledText>
      {text} 
    </StyledText>
  );
}

export default Typing;