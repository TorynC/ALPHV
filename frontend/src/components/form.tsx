import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import "../styles/form.css";
import logo from "../assets/logo.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";

const colorOptions = ["RED", "GREEN", "BLUE", "YELLOW"];
const shapeOptions = ["CIRCLE", "TRIANGLE", "SQUARE"];

// props that will be passed from parent to child component indicating what type of form this will be
type FormProps = {
  route: string; // API endpoint for the form submission
  method: string; // Determines whether the form is for adding or editing
};

// Main Form component: renders a form for adding or editing items
function Form({ route, method }: FormProps) {
  const [name, setName] = useState(""); // State to hold the name input value
  const [color, setColor] = useState(colorOptions[0]); // State for the selected color, default to first color option
  const [shape, setShape] = useState(shapeOptions[0]); // State for the selected shape, default to first shape option
  const [loading, setLoading] = useState(false); // Loading state to disable form during API call
  const navigate = useNavigate(); // React Router's navigate function for programmatic navigation

  // function to handle what happens after the submit button is clicked on form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // communicate with api to add new item to database
      if (method === "add") {
        const response = await api.post(
          route,
          {
            name,
            shape,
            color,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Success:", response.data);
        toast.success("Item Added");
        // Navigate back to items list after short delay
        setTimeout(() => navigate("/items/"), 1500);
        // communicate with api to edit item
      } else {
        const response = await api.put(
          route,
          {
            name,
            shape,
            color,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("item successfully edited");
        toast.success("Item Edited");
        console.log(response.data);
        setTimeout(() => navigate("/items/"), 1500);
      }
    } catch (error: any) {
      // Handle errors returned from backend API
      if (error.response) {
        // Show detailed error from Django
        console.error("Backend error:", error.response.data);
        alert(`Error: ${JSON.stringify(error.response.data)}`);
      } else {
        // Handle network or other errors
        console.error("Error:", error.message);
        alert("Network error - check console");
      }
    } finally {
      setLoading(false); // Reset loading state when request finishes
    }
  };

  return (
    // returning form component for user input
    <form onSubmit={handleSubmit} className="form-container">
      <img src={logo} width={250} height={100} alt="ALPHV logo" />

      <h1>{method === "add" ? "Add Item" : "Edit Item"}</h1>
      <input
        className="form-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />

      <select
        className="form-input"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        required
      >
        {colorOptions.map((option) => (
          <option key={option} value={option}>
            {option.toLowerCase()} {/* Display lowercase, sends uppercase */}
          </option>
        ))}
      </select>

      <select
        className="form-input"
        value={shape}
        onChange={(e) => setShape(e.target.value)}
        required
      >
        {shapeOptions.map((option) => (
          <option key={option} value={option}>
            {option.toLowerCase()}
          </option>
        ))}
      </select>

      <button className="form-button" type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}

export default Form;
