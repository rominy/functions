import React, { useState } from 'react';
import styled from 'styled-components';
import NomalMd from './modals/NomalMd';

const StyledModal = styled.div`
`;

function Modal(props) {
  const [modals, setModals] = useState(false);

  const handleModalOpen = () => {
    setModals(!modals);
  }

  return (
    <StyledModal>
      <button onClick={handleModalOpen}>일반모달</button>
      { modals && <NomalMd modals={modals} /> }
    </StyledModal>
  )
}

export default Modal;