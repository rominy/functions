import React, { useState } from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
`;

function NomalMd(props) {
  const { modals } = props;
  const [modal, setModal] = useState(modals);

  return (
    <StyledModal>
      {modal &&
        <>
          <p>모달창입니다.</p>
          <button onClick={() => setModal(false)}>취소</button>
          <button>확인</button>   
        </>
      }
    </StyledModal>
  );
}

export default NomalMd;