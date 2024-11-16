import { useState } from "react";

function Button(props) {
    const [isLogin, setIsLogin] = useState(false)
    function handleLogin(user) {
        setIsLogin(!isLogin)
    }
    return (
        <>
         <button onClick={handleLogin}>Click me</button>
        <>
            {!isLogin ? (
                <div>Chưa đăng nhập</div>
            ) : <div>Đã đăng nhập</div>}
        </>
        </>
       
    );
}

export default Button;