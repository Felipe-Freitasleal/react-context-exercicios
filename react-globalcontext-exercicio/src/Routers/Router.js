import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Card } from "../Pages/Card";


export function Router () {
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Card/>}/>
        </Routes>
    </BrowserRouter>
}