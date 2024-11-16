import axios from 'axios'

const getListProduct = async (id) => {
    const response = await axios.get(`http://localhost:3001/api/get-list-product/${id}`);
    return response; 
};

const getDetailProduct = async (id) => {
    const response = await axios.get(`http://localhost:3001/api/get-detail-product/${id}`);
    return response; 
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getListProduct, getDetailProduct };