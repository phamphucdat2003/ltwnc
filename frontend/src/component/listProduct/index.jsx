import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productService from "../../service/productService";

function ListProduct() {
  const [ListProduct, setListProListProduct] = useState([]);
  let { idnhom } = useParams();

  useEffect(() => {
    const getListProduct = async () => {  
      const response = await productService.getListProduct(idnhom);
      setListProListProduct(response.data);
    };
    getListProduct();
  }, [idnhom]);
  return (
    <ul>
      {ListProduct.map((product) => (
        <li key={product.masp}>
          <Link to={`/detail-product/${product.masp}`}>{product.ten}</Link>
        </li>
      ))}
    </ul>
  );
}

export default ListProduct;
