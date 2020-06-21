import React from 'react';
import {useSelector} from 'react-redux';

const Products = () => {
  const allProductInfo = useSelector(state => state.products.products || {});

  return (
    <table>
      <thead>
        {
          allProductInfo.map((p, i) => (
            <tr key={i} className='product-table'>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{`${p.currency} ${p.price}`}</td>
              <td>{p.stocked ? 'In Stock' : 'Out of Stock'}</td>
            </tr>
            )
          )
        }
      </thead>
    </table>
  );
}

export default Products;
