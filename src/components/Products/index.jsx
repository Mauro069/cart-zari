import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import styles from "./styles.module.scss";
import { ProductsData } from "../../data/Data";
import { useNavigate } from "react-router";

const Products = () => {
  /* Traemos del context la funcion para agregar un producto */
  const { AddItemToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className={styles.productsContainer}>
      {ProductsData.map((product, i) => (
        <div className={styles.product} key={i}>
          <img
            onClick={() => navigate(`/${product.id}`)}
            src={product.img}
            alt={product.name}
          />
          <div>
            <p>
              {product.name} - ${product.price}
            </p>
          </div>
          <button onClick={() => AddItemToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
