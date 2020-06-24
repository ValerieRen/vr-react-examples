import React from 'react';
import Table from "./Table";
import {useSelector} from "react-redux";
import AddProduct from "./AddProduct";

const Products = () => {
  const allProductInfo = useSelector(state => state.products.products || {});

  return (
      <div className="container">
          <div className="title">
            <span>Products Information</span>
          </div>
          <Table data={allProductInfo} />
          <div className="title">
            <span>Add new product</span>
          </div>
          <AddProduct />
      </div>
  );
}

export default Products;
