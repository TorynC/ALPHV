import "../styles/table.css";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import api from "../api";
import redCircle from "../assets/red-circle.png";
import blueCircle from "../assets/blue-circle.png";
import yellowCircle from "../assets/yellow-circle.png";
import greenCircle from "../assets/green-circle.png";
import redSquare from "../assets/red-square.png";
import blueSquare from "../assets/blue-square.png";
import yellowSquare from "../assets/yellow-square.png";
import greenSquare from "../assets/green-square.png";
import redTriangle from "../assets/red-triangle.png";
import blueTriangle from "../assets/blue-triangle.png";
import yellowTriangle from "../assets/yellow-triangle.png";
import greenTriangle from "../assets/green-triangle.png";
import "../styles/index.css"

// eg. {"id": 3,"name": "Toryn","color": "GREEN","shape": "TRIANGLE","timestamp": "2025-05-21T15:30:14.379350+08:00"}
// Type definition for an item fetched from API
type ItemType = {
  id: number;
  name: string;
  shape: string;
  color: string;
  timestamp: string;
};
// Table used to display all information 
function table() {
  const [items, setItems] = useState<ItemType[]>([]);
  const [loading, setLoading] = useState(false);
  // define columns for Datatable component
  const columns = [
    { name: "ID", selector: (row: ItemType) => row.id, sortable: true },
    { name: "Name", selector: (row: ItemType) => row.name },
    { name: "Shape", selector: (row: ItemType) => row.shape },
    { name: "Color", selector: (row: ItemType) => row.color },
    {
      name: "Timestamp",
      selector: (row: ItemType) => new Date(row.timestamp).toLocaleString(),
    },
    {
      // Display image corresponding to each item's shape and color 
      name: "Image",
      cell: (row: ItemType) => {
        const key = `${row.shape}-${row.color}`.toUpperCase();
        return (
          <img
            src={getImage[key]}
            alt={key}
            style={{ width: "50px", height: "50px" }}
          />
        );
      },
    },
  ];
  // useEffect hook to fetch data once component mounts
  useEffect(() => {
    fetchData();
  }, []);
  // map keys for shape-color combinatino to imported image paths
  const getImage: Record<string, string> = {
    "CIRCLE-RED": redCircle,
    "CIRCLE-BLUE": blueCircle,
    "CIRCLE-YELLOW": yellowCircle,
    "CIRCLE-GREEN": greenCircle,
    "SQUARE-RED": redSquare,
    "SQUARE-BLUE": blueSquare,
    "SQUARE-YELLOW": yellowSquare,
    "SQUARE-GREEN": greenSquare,
    "TRIANGLE-RED": redTriangle,
    "TRIANGLE-BLUE": blueTriangle,
    "TRIANGLE-YELLOW": yellowTriangle,
    "TRIANGLE-GREEN": greenTriangle,
  };
  // async function to fetch item data from API 
  async function fetchData() {
    try {
      setLoading(true);
      const response = await api.get("/items/");
      setItems(response.data);

      console.log("Items received:", response.data);
    } catch (error: any) {
      // Handle backend or network errors
      if (error.response) {
        console.error("Backend error:", error.response.data);
        alert(`Error: ${JSON.stringify(error.response.data)}`);
      } else {
        console.error("Error:", error.message);
        alert("Network error - check console");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    // Render DataTable component with columns and data
    <div className="table">
      <DataTable
        title="Items"
        columns={columns}
        progressPending={loading}
        data={items}
        pagination
        className="data-table"
      />
    </div>
  );
}

export default table;
