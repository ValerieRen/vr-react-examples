import React from "react";
import {deleteProduct, updateProductId} from "../actions/products";
import {useDispatch, useSelector} from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();
  const allProductInfo = useSelector(state => state.products.products || {});

  const onChangeName = (e, id) => {
    const prod = allProductInfo.map(p => {
      if (p.id === id) {
        p.name = e.target.value;
      }
      return  p;
    });
    dispatch(updateProductId(prod));
  }

  const onChangePrice = (e, id) => {
    const prod = allProductInfo.map(p => {
      if (p.id === id) {
        p.price = e.target.value;
      }
      return p;
    });
    dispatch(updateProductId(prod));
  }

  const onChangeDelete = (id) => {
    dispatch(deleteProduct(id));
  }

  return (
    <table className='product-table'>
      <thead className="product-table table-header">
      <tr>
        <th>ID</th>
        <th>Item</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
      {
        allProductInfo.map((p, i) => (
          <tr key={i} className="product-table table-item">
            <td>{p.id}</td>
            <td>
              <input
                type="text"
                className="form-control"
                defaultValue={p.name}
                onChange={e => onChangeName(e, p.id)}/>
            </td>
            <td className="item-in-row">
              <span>{`${p.currency} `}</span>
              <input
                type="text"
                className="form-control"
                defaultValue={`${p.price}`}
                onChange={e => onChangePrice(e, p.id)}/>
            </td>
            <td>{p.stocked ? 'In Stock' : 'Out of Stock'}</td>
            <td>
              <input
                 type="checkbox"
                 onChange={() => onChangeDelete(p.id)}/>
            </td>
          </tr>
        ))
      }
      </tbody>
    </table>
  );
}

export default ProductList;