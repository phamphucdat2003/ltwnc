import axios from 'axios'

const getAllGroup = async () => {
    const response = await axios.get("http://localhost:3001/api/get-all-groups");
    return response; 
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAllGroup };