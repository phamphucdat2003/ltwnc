import axios from 'axios'

const login = async (username, password) => {
    const response = await axios.post(`http://localhost:3001/api/users/login`, {username, password}, {withCredentials: true});
    console.log(response.data)
    return response.data; 
};

const getAccount = async (id) => {
    const response = await axios.get(`http://localhost:3001/api/users/getuserbyid/${id}`, {withCredentials: true});
    return response; 
};

const logout = async () => {
    const response = await axios.post(`http://localhost:3001/api/users/logout`, {withCredentials: true});
    return response.data; 
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { login, getAccount, logout };