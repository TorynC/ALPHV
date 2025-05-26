import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from "./pages/admin";
import EditItems from "./pages/EditItem";
import Items from "./pages/items";
import NotFound from "./pages/NotFound";


// Root component defining all routes for the application
function App() {
  return (
    // Admin page - default route 
    // EditItems page – dynamically loads based on item ID in URL
    // Items page – displays user-facing table and edit/delete form
    // Catch-all route for undefined URLs – shows 404 page
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin></Admin>}></Route>
        <Route path="/edititems/:id" element={<EditItems></EditItems>}></Route>
        <Route path="/items" element={<Items></Items>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
