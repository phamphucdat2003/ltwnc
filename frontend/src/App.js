import "./App.css";
import Header from "./component/header";
import Footer from "./component/footer";
import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <>
      <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>
      </div>
    </>
   
  );
}

export default App;
