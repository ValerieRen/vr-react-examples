import React from "react";

const Table = props => {

  return (
    <table className='product-table'>
      <thead className="product-table table-header">
      <tr>
        <th>ID</th>
        <th>Item</th>
        <th>Price</th>
        <th>Stock</th>
      </tr>
      </thead>
      <tbody>
      {
        props.data.map((p, i) => (
          <tr key={i} className="product-table table-item">
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{`${p.currency} ${p.price}`}</td>
            <td>{p.stocked ? 'In Stock' : 'Out of Stock'}</td>
          </tr>
        ))
      }
      </tbody>

    </table>
  );
}

export default Table;