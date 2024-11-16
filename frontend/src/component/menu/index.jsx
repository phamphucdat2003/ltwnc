import Item from "../item";

function Menu() {
    return ( 
        <>
         <div>Người dùng</div>
            <ul className="menu">
           <Item link='http://localhost:3000/' content='nguoi dung1'/>
           <Item link='http://localhost:3000/' content='nguoi dung2'/>
           <Item link='http://localhost:3000/' content='nguoi dung3'/>
            </ul>
        </>
     );
}

export default Menu;