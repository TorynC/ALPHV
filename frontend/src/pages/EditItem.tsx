    import { useNavigate, useParams } from "react-router-dom";
    import api from "../api";
    import { useState, useEffect } from "react";
    import { ToastContainer, toast } from "react-toastify";
    import "react-toastify/dist/ReactToastify.css";
    import Form from "../components/form";
    import "../styles/table.css"
    import "../styles/index.css"
    
    // Page used to allow users to edit or delete specific item identified by ID from URL params 
    function EditItems() { 
        // Type definition for an item 
        type ItemType = {
            id: number;
            name: string;
            shape: string;
            color: string;
            timestamp: string;
            };
        // Extract item ID from URL parameter
        const {id} = useParams();
        // Store item data fetched from backend 
        const [item, setItem] = useState<ItemType | null>(null);
        const navigate = useNavigate();
        // Loading state for API calls
        const [loading, setLoading] = useState(false);
        
        // async function for fetching the item data from API when component mounts or ID changes
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

        // function to delete the item by ID via API call 
        const deleteItem = async () => {    
            try{
                setLoading(true)
                console.log("Trying to delete item with ID:", id);
                await api.delete(`/items/${id}/`);
                console.log(`Item with ID ${id} has been successfully deleted!`);
                
                toast.success("Item Deleted!");
                // navigate back to the items list after a short delay 
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
            // form component for editing item details, passing the correct route and method to show editing mode
            // buttons available to delete item or navigate back to items page 
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
