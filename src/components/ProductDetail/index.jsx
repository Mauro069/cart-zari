import { useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import { ProductsData } from "../../data/Data";
import styles from "./styles.module.scss";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { AddItemToCart } = useContext(CartContext);

  const { productId } = useParams();

  const getProductById = useCallback(() => {
    const productFind = ProductsData.find(
      (product) => product.id === Number(productId)
    );
    setProduct(productFind);
  }, [productId]);

  useEffect(() => {
    getProductById(); 
  }, [getProductById]);

  return (
    <div className={styles.detail}>
      <Link to="/">Volver a la Home</Link>
      <div className={styles.product}>
        <img src={product?.img} alt="product" />
        <div className={styles.data}>
          <h1>{product?.name}</h1>
          <div className={styles.add}>
            <p>
              Precio: <b>${product?.price}</b>
            </p>
            <button onClick={() => AddItemToCart(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
