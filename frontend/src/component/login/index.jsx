import { useContext, useEffect, useState } from "react";
import userService from "../../service/userService.js";
import { Context } from "../Context/index.jsx";
import { useNavigate } from 'react-router-dom';
function Login() {
  const [inputs, setInputs] = useState({});
  const [response, setResponse] = useState()
  const { user, loginContext } = useContext(Context);
  const navigate = useNavigate()
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [isCheck, setCheck] = useState(false);
  const handleChecked = () => {
    setCheck(!isCheck);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await userService.login(inputs.username, inputs.pass);
    setResponse(response)
    if(response.message === 'Success') {
    
      loginContext(response.username)
      if (response.message === 'Success') {
        navigate('/')
      }
    }
   
  };
  useEffect(() => {
    if(user.auth){
      navigate('/')
    }
    
  })
  return (
    <form>
      <label>
        Enter your username:{" "}
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Enter your password:
        <input
          type="text"
          name="pass"
          value={inputs.pass || ""}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        <input type="checkbox" checked={isCheck} onChange={handleChecked} />
        Is Admin?
      </label>
      <br />
      <br />
      <label>
        {response && response.message}
      </label>
      <br />
      <button onClick={handleSubmit}>Đăng nhập</button>
    </form>
  );
}
export default Login;
