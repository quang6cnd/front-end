import React, { useState, useEffect } from "react";
// import dataFake from "./dataFake";
import Routers from "./routers";
import apiRequest from "./api/productApi";
import Request from "./api/categoryApi";
// import postsRequest from "./api/postsApi";
// import apiRequest from "./api/categoryApi";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState(false);
    const [color, setColor] = useState("green");
    const onHandleClick = () => {
        // setStatus(true);
        setColor("red");
    };
    // Danh sách sản phẩm
    useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await apiRequest.getAll();
                setProducts(data);
            } catch (error) {
                console.log("failed to request API: ", error);
            }
        };
        getProducts();
    }, []);
    // Xóa sản phẩm
    const onHandleRemove = async (id) => {
        try {
            const { data } = await apiRequest.remove(id);
            const newProducts = products.filter((product) => product.id !== id);
            setProducts(newProducts);
            alert("Bạn xóa thành công")
        } catch (error) {
            console.log("failed to request API: ", error);
        }
    };
    // Thêm sản phẩm
    const onHanleAdd = async (product) => {
        try {
            const { data } = await apiRequest.create(product);
            setProducts([...products, data]);
            alert("Bạn thêm thành công")
        } catch (error) {
            console.log("failed to request API: ", error);
        }
    };
    const onHandSearch = (product) => {
        const newProduct = products.filter((product) => product.name.toLowerCase().indexOf(product.toLowerCase()) !== -1);
        setProducts(newProduct);
    };
    //update
    const onHandleUpdate = async (id, product) => {
        try {
            const { data } = await apiRequest.update(id, product);
            const newProducts = products.map((pro) => (pro.id === id ? product : pro));
            setProducts(newProducts);
            alert("Update thành công")
        } catch (error) {
            console.log("failed to request API: ", error);
        }

    };

    //----------------------------category--------------------------
    const [category, setCategory] = useState([]);
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await Request.getAllCate();
                setCategory(data);
            } catch (error) {
                console.log("failed to request API: ", error);
            }
        };
        getCategory();
    }, []);
    //add
    const onHandleAddCate = async (cate) =>{
        try{
            const { data }= await Request.createCate(cate)
            setCategory([...category,data]);
            console.log("Bạn thêm thành công");
        } catch(error){
            console.log("faild to request Api",error);
        }
    };
    //delete
    const removeCate = async (id)=>{
        try{
            const {data}=await Request.removeCate(id);
            const newCate = category.filter((cate)=>cate.id !==id);
            setCategory(newCate);
            alert("Bạn xóa thành công");
        } catch(error){
            console.log("faild to api" ,error);
        }
    }

    //update
    const onHandUpdateCate = async (id,cate) =>{
        try{
            const {data} = await Request.updateCate(id,cate);
            const newCate = category.map((catego)=>(catego.id===id?cate:catego));
            setCategory(newCate);
            alert("Bạn update thành công");
            // localStorage.setItem('category', JSON.stringify(newCate));
        } catch(error){
            console.log("failed to request API: ", error);
        }
    }

  
    
    return (
        <div className="App">
            <Routers products={products}
                onRemove={onHandleRemove}
                onAdd={onHanleAdd}
                onUpdate={onHandleUpdate}
                onSearch={onHandSearch}
                category={category}
                onAddCate={onHandleAddCate}
                onRemoveCate={removeCate}
                onUpdateCate={onHandUpdateCate}
              
            />
        </div>
    );
}
export default App;
