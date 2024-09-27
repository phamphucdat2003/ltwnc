import Item from "../Item";
import Styles from "./Menu.module.scss"
import clsx from 'clsx'
function Menu() {
    return ( 
       <>
            <ul className={clsx(Styles.ulMenu)}>
                <Item link='https://www.facebook.com/Tvd.365' content="Trương Văn Đạt"/>
                <Item link='https://www.facebook.com/profile.php?id=100028058438694'content="Lê Nguyễn Minh Hòa"/>
            </ul>
            
       </>
     );
}

export default Menu;