import {Route, BrowserRouter as Router} from "react-router-dom"; 
import React from "react"; 
import Homepage from "./Webshop/Homepage";
import Header from "./Partials/Header"; 
import Footer from "./Partials/Footer"; 
import ProductInfo from "./Webshop/Product"; 
import ProductList from "./Webshop/Products";
import ProductTemplate from "./Webshop/Template";



function AppRoute() { 
    return(
        <>
        <Router>

            <Header /> 
                <Route exact path="/" component={Homepage} />
                <Route exact path="/product" component={ProductInfo} />
                <Route exact path="/products" component={ProductList} />
                <Route exact path="/template" component={ProductTemplate} />


        
           
        </Router>
        </> 

    )
}
export default AppRoute