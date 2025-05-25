    import { useNavigate, useParams } from "react-router-dom";
    import api from "../api";
    import { useState, useEffect } from "react";
    import { ToastContainer, toast } from "react-toastify";
    import "react-toastify/dist/ReactToastify.css";
    import Form from "../components/form";
    import "../styles/table.css"
    import "../styles/index.css"
    
    function EditItems() { 
        type ItemType = {
            id: number;
            name: string;
            shape: string;
            color: string;
            timestamp: string;
            };
        const {id} = useParams();
        const [item, setItem] = useState<ItemType | null>(null);
        const navigate = useNavigate();
        const [loading, setLoading] = useState(false);
      
        async function fetchItem() {
            try {
                setLoading(true);
                const response = await api.get(`/items/${id}`);
                setItem(response.data);
                console.log(response.data);
                console.log(loading)
                console.log(item)
        
            } catch (error: any) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        useEffect(() => {
            fetchItem();
        }, [id])

        const deleteItem = async () => {    
            try{
                setLoading(true)
                console.log("Trying to delete item with ID:", id);
                await api.delete(`/items/${id}/`);
                console.log(`Item with ID ${id} has been successfully deleted!`);
                
                toast.success("Item Deleted!");
                setTimeout(() => navigate("/items/"), 1500);
            } catch (error:any) {
                console.error(error);
                console.log(`Could not delete item with ID ${id}`);
                toast.error("ERROR, Could not delete item");
            } finally {
                setLoading(false);
            }   
        };

        return (
            <div>
            <Form route={`/items/${id}/`} method="edit"></Form>    
                <div className="form-section">
                    <button className="return-admin" onClick={deleteItem}> Delete item </button>
                    <button className="return-admin" onClick={() => navigate("/items")}> Cancel </button>
                </div>
            <ToastContainer/>
            </div>
        );
    }

    export default EditItems;
