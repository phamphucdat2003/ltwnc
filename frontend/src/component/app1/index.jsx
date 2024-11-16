import Button from "../button";
import Information from "../information";
import Menu from "../menu";

function App1() {
    const userInfo = 'Le Nguyen Minh Hoa'
   
    return ( 
        <>
        <Information user={userInfo}/>
        <Menu />
        <Button />
        </>
        
     );
}

export default App1;