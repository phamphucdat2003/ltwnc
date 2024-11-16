import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import groupService from '../../service/groupService';
import userService from "../../service/userService.js";
import { Context } from "../Context/index.jsx";
const Header = () => {
    const [listGroup, setListGroup] = useState([]);
    const { user, logoutContext } = useContext(Context);

    const handleLogout = async () => {
        const response = await userService.logout();  
        if(response.message === 'ok'){
            logoutContext()        
        }
        
    }
    useEffect(() => {
        const getGroup = async () => {
            const response = await groupService.getAllGroup();
            setListGroup(response.data); 
        };
        getGroup();    
    }, []);
    
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"car"}>Car</Link>
                </li>
                {listGroup.map((group) => (
                    <li key={group.idnhom}>
                        <Link to={`list-product/${group.idnhom}`}>{group.ten}</Link>
                    </li>
                ))}
                {
                    user.auth && (
                        <li>
                        <Link to={"detail-user"}>Người dùng: {user.username}</Link>
                    </li>
                    )
                }
                {!user.auth ? (
                <li>
                    <Link to="login">Login</Link>
                </li>
            ) : (
                <li>
                    <button onClick={handleLogout}>Sign Out</button>
                </li>
            )}
                
            </ul>
        </nav>
    );
};

export default Header;