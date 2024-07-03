import { Outlet } from "react-router-dom";
import Navber from "../Component/Home/Navber/Navber";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
            
        </div>
    );
};

export default Root;