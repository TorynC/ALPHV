import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Table from "../components/table";
import "../styles/table.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css"


type ItemType = {
  id: number;
  name: string;
  shape: string;
  color: string;
  timestamp: string;
};

function Items() {
  const [item, setItem] = useState<ItemType[]>([]);
  const [id, setID] = useState("");

  useEffect(() => {
    getItems();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const idNum = parseInt(id);
    const exists = item.some((i) => i.id === idNum);
    if (exists) {
      console.log("success, editing id:", {id});
      navigate(`/edititems/${id}`);
    } else {
      toast.error("No ID Found")
      console.log("no id found");
      setTimeout(() => navigate("/items/"), 1500);
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const getItems = () => {
    api
      .get("/items/")
      .then((res) => res.data)
      .then((data) => {
        setItem(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  return (
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
          <button className="return-admin" onClick={handleClick}>Return to Admin Portal</button>
          <ToastContainer/>
        </div>
</form>

    </div>
  );
}

export default Items;
