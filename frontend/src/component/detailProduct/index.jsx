import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../../service/productService";

function DetailProduct() {
  const [detailProduct, setDetailProduct] = useState([]);
  let { idsp } = useParams();

  useEffect(() => {
    const detailProduct = async () => {  
      const response = await productService.getDetailProduct(idsp);
      setDetailProduct(response.data[0]);
    };
    detailProduct();
    
  }, [idsp]);
  return (
    <div>
      <p>{detailProduct.ten}</p>
      <p>{detailProduct.gia}</p>
      <p>{detailProduct.hinhanh}</p>
    </div>
  );
}

export default DetailProduct;
