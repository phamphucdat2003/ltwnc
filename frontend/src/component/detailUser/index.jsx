import { useEffect, useState} from "react";
import userService from "../../service/userService";
function DetailUser() {
  const [detailUser, setDetailUser] = useState([]);

  useEffect(() => {
    const DetailUser1 = async () => {  
      const response = await userService.getAccount();
      setDetailUser(response.data[0]);
    };
    DetailUser1();
  }, []);
  return (
    <div>
      <p>{detailUser.address}</p>
      <p>{detailUser.email}</p>
      <p>{detailUser.fullname}</p>
      <p>{detailUser.address}</p>
      <p>{detailUser.sex}</p>
    </div>
  );
}

export default DetailUser;
