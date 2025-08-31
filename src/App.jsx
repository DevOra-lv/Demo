import { Route, Routes } from "react-router-dom";
import Home from "./views/Home/Home";
import Default from "./views/default/Default";
import Alain from "./views/alain/Alain";
import Alain2 from "./views/alain2/Alain2";

export default function App() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/default" element={<Default />} />
            <Route path="/alain" element={<Alain />} />
            <Route path="/alain2" element={<Alain2 />} />
        </Routes>
    );
}
