import Form from "../components/form"
import { useNavigate } from "react-router-dom"
import "../styles/admin.css"
import { ToastContainer, toast } from "react-toastify";
import "../styles/index.css"


function Admin() {
    const navigate = useNavigate();
    
    return (
        <div>
            <Form route="/items/" method="add"/>
            <button className="admin-button" onClick={() => navigate("/items/")}>User Portal</button>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default Admin