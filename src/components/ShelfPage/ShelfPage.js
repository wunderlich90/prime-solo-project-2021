import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ShelfPage() {

  const shelf = useSelector(store => store.shelf);
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch({ 
      type: `FETCH_SHELF_LIST`
    })
  }, []);





  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {shelf.map(item => (
        <div key={item.id}>
          <p>{item.description}</p>
          <p>{item.image_url}</p>
        </div>
      ))}
    </div>
  );
}

export default ShelfPage;
