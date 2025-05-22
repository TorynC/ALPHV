import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Table from  "../components/table";

function Items() {
  const [item, setItem] = useState("");

  useEffect(() => {
    getItems();
  }, []);

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/");
  }

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
      <Table/>
      <button onClick={handleClick}>
        Return to Admin Portal
      </button>
    </div>
  );
}

export default Items;
