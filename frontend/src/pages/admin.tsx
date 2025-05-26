import Form from "../components/form"
import { useNavigate } from "react-router-dom"
import "../styles/admin.css"
import { ToastContainer } from "react-toastify";
import "../styles/index.css"

// Landing page, used to initially create new items and add to the Table
function Admin() {
    const navigate = useNavigate();
    // form component configured for adding new items to the database
    // button option available to navigate to table portal without adding a new item
    return (
        <div>
            <Form route="/items/" method="add"/>
            <button className="admin-button" onClick={() => navigate("/items/")}>User Portal</button>
            <ToastContainer></ToastContainer>
        </div>
    );
}

export default Admin