import React from 'react';

export default function Page({ goNextPage, goPrevPage }) {
  return (
    <div className="pages">
      {goPrevPage && <button onClick={goPrevPage} className="pg-btn">Previous</button>}
      {goNextPage && <button onClick={goNextPage} className="pg-btn">Next</button>}
    </div>
  )
}
