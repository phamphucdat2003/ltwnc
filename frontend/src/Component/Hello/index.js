function Hello({name}){

    return(
        <span>
            <button onClick={()=>{
        alert("hello everyone")
    }}>Hi All</button>
            <button onClick={()=>{
        alert("Hello "+ name)
    }}>Hi you</button>
        </span>
        
    )
}
export default Hello