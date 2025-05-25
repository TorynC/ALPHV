import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Admin from "./pages/admin";
import EditItems from "./pages/EditItem";
import Items from "./pages/items";
import NotFound from "./pages/NotFound";

function App() {
  return (
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
