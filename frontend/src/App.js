import "./App.css";
import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Menu from "./Component/Menu";
import Information from "./Component/Information";
import Button from "./Component/Button";
import Hello from './Component/Hello';
import Car from './Component/Car';
import Login from './Component/Login';


function App() {
  const [isLogin, setIsLogin] = React.useState(false);
  const handleClick = () => {
    setIsLogin(!isLogin);
  };
  return (
    <>
      {isLogin ? <h2>đã đăng nhập</h2> : <h2>chưa đăng nhập</h2>}
      <Header />
      <Menu />
      <Information nameuser="truong van dat" />
      <Button handleClick={handleClick} isLogin={isLogin} />
      <Footer />

      <Hello name="truong van dat"/>

      <Car />

      <Login />
    </>
  );
}

export default App;
