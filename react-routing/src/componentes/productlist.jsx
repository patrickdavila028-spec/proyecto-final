import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./productlist.module.css";
import Productcard from "./productcard";

function ProductList() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get("https://dummyjson.com/product")
            .then(response => setProducts(response.data.products))
            .catch(error => console.error(error));
    }, []);
    
    return (
        <div className={styles.container}>
            {products.map(product => <Productcard key={product.id} product={product} />)}
        </div>
    );
}

export default ProductList;