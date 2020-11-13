import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addProduct} from "../actions/products";

const AddProduct = () => {
  const [item, setItem] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(addProduct(item, price, stock));
  }

  return (
    <div className="product-table">
      <div className="form">
        <label>Item <input type="string" onChange={e => setItem(e.target.value)} /></label>
        <label>Price <input type="string" onChange={e => setPrice(e.target.value)} /></label>
        <div className="radio-group">
          <ul>
            <li>
              <label>
                In Stock
                <input
                    type="radio"
                    value={true}
                    checked={!!stock}
                    onChange={() => setStock(!stock)}
                  />
              </label>
            </li>
            <li>
              <label>
                Out of Stock
                <input
                  type="radio"
                  value={false}
                  checked={!stock}
                  onChange={() => setStock(!stock)}
                />
              </label>
            </li>
          </ul>
        </div>
        <input onClick={onSubmit} type="button" value="Submit"/>
      </div>
    </div>
  );
};

export default AddProduct;