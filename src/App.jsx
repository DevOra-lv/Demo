import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Default from "./views/default/Default";
import Alain from "./views/alain/Alain";

export default function App() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/default" element={<Default />} />
            <Route path="/alain" element={<Alain />} />
        </Routes>
    );
}
