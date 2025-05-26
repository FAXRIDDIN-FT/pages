import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import User from "./pages/user/User";
import Recipe from "./pages/Recipe/Recipe";

import Login from "./pages/Login/Login";
import Layout from "./pages/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFount/NotFound";
import axios from "axios";
import ProductDetail from "./components/productDetails/ProductDetails";
import RicepesDetails from "./components/RicepesDetails/RicepesDetails";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get("https://dummyjson.com/products").then((res) => {
      setProduct(res.data);
      setLoading(false);
    });
  }, []);

  // ricepes
  const [recipes, setRecipes] = useState(null)
    const [error, setError] = useState(null)
   
    useEffect(() => {
      setError(true)
      axios.get("https://dummyjson.com/recipes").then((res) =>{
        setRecipes(res.data)
        console.log(res.data)
        setError(false);
      })
    }, [])
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={<Home product={product} loading={loading} />}
          />
          <Route path="/user" element={<User />} />
          <Route path="/recipe" element={<Recipe recipes={recipes} error={error} loading={loading}/>} />
        
          <Route path="*" element={<NotFound />} />
          <Route path="/product/:id" element={<ProductDetail product={product} />} />
          <Route path="/recipes/:id" element ={<RicepesDetails recipes={recipes}/>}/>
        </Route>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
