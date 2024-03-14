import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledPagination = styled.div`
  text-align: center;

  ul {
    min-height: 108px;
  }

  li {
    padding: 10px 0;
  }

  button {
    cursor: pointer;
  }

  .active__btn {
    background-color: #ADD8E6;
  }
`;


function Pagination(props) {
  const [items, setItems] = useState(['item1', 'item2', 'item3']);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;
  const totalPages = Math.ceil(items.length / perPage);

  // 삭제 시 현재 머무르고 있는 페이지(currentPage)가 전체 페이지(totalPages)보다 높으면 페이지 이동
  // 전체 삭제 됐다가 다시 추가 했을때 1번 페이지로 이동
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(totalPages);
    }
  }, [totalPages]);

  const handleCreateItem = () => {
    const newItem = `item${items.length+1}`
    setItems([...items, newItem]);
  }

  const handleRemoveItem = () => {
    const newItems = items.slice(0, -1);
    setItems(newItems);
    setCurrentPage(totalPages);
  }

  const handleMovePage = (index) => {
    setCurrentPage(index+1)
  }

  const handleMoveToggle = (type) => {
    if (type === 'up' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (type === 'down' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      return;
    }
  }

  return (
    <StyledPagination>
      <button onClick={handleCreateItem}>아이템 추가</button>
      <button onClick={handleRemoveItem}>아이템 제거</button>
      <ul>
      {items.map((item, index) => { 
        return (
          <li key={index}>
            {item}
          </li>
        )
      }).slice( perPage * (currentPage - 1), perPage * currentPage)
      }
      </ul>
      {items.length >= 1 && 
        <div>
        <button onClick={() => handleMoveToggle('down')}>&lt;</button>
        {[...Array(totalPages)].map((page, index) => {
          return (
            <button className={currentPage === index+1 && 'active__btn'} onClick={() => handleMovePage(index)} key={index}>{index+1}</button>
        )})}
        <button onClick={() => handleMoveToggle('up')}>&gt;</button>
        </div>
      }
    </StyledPagination>
  );
}

export default Pagination;