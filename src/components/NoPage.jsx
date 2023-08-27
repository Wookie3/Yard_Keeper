import '../App.css';
import { useNavigate } from "react-router-dom";



const Nopage = () => {
    const navigate = useNavigate();
    return (
        <div className="no-page">
            <p>Error, page not found!</p>
            <button onClick={() => {navigate("/home")}}>Home</button>
        </div>
    )
};
export default Nopage;