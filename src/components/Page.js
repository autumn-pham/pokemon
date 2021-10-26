import React from 'react';

export default function Page({ goNextPage, goPrevPage }) {
  return (
    <div>
      {goPrevPage && <button onClick={goPrevPage}>Previous</button>}
      {goNextPage && <button onClick={goNextPage}>Next</button>}
    </div>
  )
}
