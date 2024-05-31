import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DaynamicPageTitle(props) {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  useEffect(() => {
    document.title = `${page} 페이지입니다`
  }, [page])

  const handleMovePage = (num) => {
    setPage(num);
    navigate(`/page=${num}`);
  };

  return (
    <div>
      <button onClick={() => handleMovePage(1)}>1 페이지</button>
      <button onClick={() => handleMovePage(2)}>2 페이지</button>
      <button onClick={() => handleMovePage(3)}>3 페이지</button>
    </div>
  );
}

export default DaynamicPageTitle;