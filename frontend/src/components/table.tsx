import "../styles/table.css";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import api from "../api";

//{"id": 3,"name": "Toryn","color": "GREEN","shape": "TRIANGLE","timestamp": "2025-05-21T15:30:14.379350+08:00"}
type ItemType = {
    id: number,
    name: string,
    shape: string,
    color: string,
    timestamp: string,
};


function table () {
    const [items, setItems] = useState<ItemType[]>([]);
    const [loading, setLoading] = useState(false);

    const columns = [
        {name: "ID", selector:(row: ItemType) => row.id, sortable: true},
        {name: "Name", selector: (row: ItemType) => row.name},
        {name: "Shape", selector: (row: ItemType) => row.shape},
        {name: "Color", selector: (row: ItemType) => row.color},
        {name: "Timestamp", selector: (row: ItemType) => new Date(row.timestamp).toLocaleString()}
    ]

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            setLoading(true);
            const response = await api.get('/items/');
            setItems(response.data);

            console.log("Items received:", response.data);
        } catch(error: any) {
            if (error.response) {
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
        <div className="table">
        <DataTable 
        title="Items"
        columns = {columns}
        progressPending={loading}
        data={items}
        pagination
        />
    </div>
    );
}

export default table;