import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "./App";
import Main from "./pages/Main";
import Stocks from "./pages/Stocks";
import Price from "./pages/Prices";
import About from "./pages/About";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route 
            path="/" 
            element={<App/>}
        >
                <Route
                    path=""
                    element={<Main/>}
                />
                <Route
                    path="about"
                    element={<About/>}
                />
                <Route
                    path="stocks"
                    element={<Stocks/>}
                />
                <Route
                    path="price/:symbol"
                    element={<Price/>}
                />
        </Route>
    )
);

export default router;