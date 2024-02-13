import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import { Header } from "../components/Header"
import Basket from "../pages/Basket";
import Products from "../pages/Products";
import Home from "../pages/Home";


export function App() {

    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/basket" element={<Basket/>}/>
                    <Route path="/products/:goods" element = {<Products/>}/> 
                </Routes>

        </BrowserRouter>

    )
}

// goods параметр маршрута products, в Link указываем уже значение параметра goods