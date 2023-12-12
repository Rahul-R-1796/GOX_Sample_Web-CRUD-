import React, { useState } from 'react';
import "./ProductCart.css"


  const ProductCart = () => {
    const [products, setProducts] = useState([
      { name: 'iPhone 13', price: 52999, specification: '6.1" display, A15 Bionic chip', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/3150P3KQFlL._SY445_SX342_QL70_FMwebp_.jpg' },
      { name: 'MacBook Pro ', price: 154900, specification: 'M1 chip, 8GB RAM, 256GB SSD', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/41At6UlfYJL._SY445_SX342_QL70_FMwebp_.jpg' },
      { name: 'iPad Air', price: 57599, specification: '10.9" display, A14 Bionic chip', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/31vkmB-vYJL._SY445_SX342_QL70_FMwebp_.jpg' },
    ]);


  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    specification: '',
    image: ''
  });

  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const addProduct = () => {
    if (
      newProduct.name.trim() === '' ||
      newProduct.price === '' ||
      newProduct.specification.trim() === '' ||
      newProduct.image.trim() === ''
    ) {
      alert('Please fill out all the required fields.');
      return;
    }

    if (editMode) {
      const updatedProducts = [...products];
      updatedProducts[editIndex] = { ...newProduct };
      setProducts(updatedProducts);
      setEditMode(false);
      setEditIndex(null);
    } else {
      setProducts([
        ...products,
        { ...newProduct },
      ]);
    }
    setNewProduct({
      name: '',
      price: '',
      specification: '',
      image: '',
    });
  };

  const editProduct = (index) => {
    setNewProduct({ ...products[index] });
    setEditMode(true);
    setEditIndex(index);
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, idx) => idx !== index);
    setProducts(updatedProducts);
  };

  return (
    <>
      <div className="product-cart">
        <h2>Product Cart</h2>
        <div className="product-form">
          <h3>Add/Edit Product</h3>
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
          <input
            required
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
          <input
            required
            type="text"
            name="specification"
            placeholder="Specification"
            value={newProduct.specification}
            onChange={handleInputChange}
          />
          <input
            required
            type="text"
            name="image"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={handleInputChange}
          />
          <button onClick={addProduct} className="add-button">
            {editMode ? 'Update' : 'Add'} Product
          </button>
        </div>
        <h3>Products</h3>
        <div className="product-list">
          {products.map((product, index) => (
            <div className="product-item" key={index}>
              <img src={product.image} alt={product.name} />
              <p>Name: {product.name}</p>
              <p>Price: {product.price}</p>
              <p>Specification: {product.specification}</p>
              <button onClick={() => editProduct(index)} className="edit-button">
                Edit
              </button>
              <button onClick={() => deleteProduct(index)} className="delete-button">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCart;
