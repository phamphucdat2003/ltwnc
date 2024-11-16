import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../../component/login";
import Car from "../../component/car";
import Hello from "../../component/hello";
import ListProduct from "../../component/listProduct";
import DetailProduct from "../../component/detailProduct";
import DetailUser from "../../component/detailUser";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Không tìm thấy web theo yêu cầu</div>,
    children: [
        {
            index: true, element: <div>Hello</div>
        },
      {
        path: "car",
        element: <Car />,
      },
      {
        path: "hello",
        element: <Hello />,
      },
      {
        path: "list-product/:idnhom",
        element: <ListProduct />,
      },
      {
        path: "detail-product/:idsp",
        element: <DetailProduct />,
      },
      {
        path: "detail-user",
        element: <DetailUser />,
      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
