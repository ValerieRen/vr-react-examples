import React from 'react';
import Table from "./Table";
import AddProduct from "./AddProduct";

const Products = () => {
  return (
      <div className="container">
          <div className="title">
            <span>Products Information</span>
            <br/>
            <sub>You can edit Item, Price in the table</sub>
          </div>
          <Table />
          <div className="title">
            <span>Add new product</span>
          </div>
          <AddProduct />
      </div>
  );
}

export default Products;
