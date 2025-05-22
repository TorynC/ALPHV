import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import "../styles/form.css";
import logo from "../assets/logo.png"

const colorOptions = ['RED', 'GREEN', 'BLUE', 'YELLOW'];
const shapeOptions = ['CIRCLE', 'TRIANGLE', 'SQUARE']; // Must match backend exactly

type FormProps = {
  route: string;
  method: string;
};

function Form({ route, method }: FormProps) {
    const [name, setName] = useState("");
    const [color, setColor] = useState(colorOptions[0]); // Default to first option
    const [shape, setShape] = useState(shapeOptions[0]);  // Default to first option
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const response = await api.post(route, {
                name,
                shape,
                color
            }, {
                headers: {
                    'Content-Type': 'application/json' // Critical header
                }
            });
            
            console.log('Success:', response.data);
            navigate("/items");
        } catch (error: any) {
            if (error.response) {
                // Show detailed error from Django
                console.error('Backend error:', error.response.data);
                alert(`Error: ${JSON.stringify(error.response.data)}`);
            } else {
                console.error('Error:', error.message);
                alert('Network error - check console');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        
        <form onSubmit={handleSubmit} className="form-container">
            <img src={logo} width={250} height={100} alt="ALPHV logo" />
            
            <h1>Add Item</h1>
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