import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Table from "../components/table";
import "../styles/table.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";

// page to display all items and displaying table
// Type definition for an item in the table 
type ItemType = {
  id: number;
  name: string;
  shape: string;
  color: string;
  timestamp: string;
};


function Items() {
  // state to store all fetched items
  const [item, setItem] = useState<ItemType[]>([]);
  // state for the ID input field 
  const [id, setID] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getItems();
  }, []);
  
  // Handles the submission of the edit/delete form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Convert ID input from string to number
    const idNum = parseInt(id);
    // Check if the ID exists in the item list
    const exists = item.some((i) => i.id === idNum);
    if (exists) {
      // navigate to edititems page if the this item exists
      console.log("success, editing id:", { id });
      navigate(`/edititems/${id}`);
    } else {
      // display alert if ID not found 
      toast.error("No ID Found");
      console.log("no id found");
      setTimeout(() => navigate("/items/"), 1500);
    }
  };
  
  // Navigate back to the Admin portal
  const handleClick = () => {
    navigate("/");
  };

  // fetch all items from the backend and update state
  const getItems = () => {
    api
      // send GET request to /items/
      .get("/items/")
      .then((res) => res.data)
      .then((data) => {
        // Set fetched data to item state
        setItem(data);
        console.log(data);
      })
      // Show alert on error
      .catch((err) => alert(err));
  };

  return (
    //Displays the table of items along with the form to submit ID for editing items
    <div>
      <h1>User Portal</h1>
      <Table />
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label>Edit/Delete Item</label>
          <input
            type="text"
            value={id}
            placeholder="ID of the item to edit"
            onChange={(e) => setID(e.target.value)}
            required
          />
          <button className="submit-button">Submit</button>
          <button className="return-admin" onClick={handleClick}>
            Return to Admin Portal
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}

export default Items;
