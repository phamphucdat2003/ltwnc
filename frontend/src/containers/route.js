import { createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Login from '../Component/Login';
import Car from '../Component/Car';
import Hello from '../Component/Hello';
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/car",
        element: <Car/>
    },
    {
        path: "/hello",
        element: <Hello name="truong van dat"/>
    },
    {
        path: "*",
        element: <div>Không tìm thấy web theo yêu cầu</div>
    }
]);