import React, { useEffect} from "react";
import Products from "../components/products"
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productsActions";


function HomeScreen(){
const dispatch = useDispatch();    
const productList = useSelector( state => state.productList);

const {loading , error , products} = productList
    useEffect(() =>{
        dispatch(listProducts())
    },[dispatch])

    return (
        <div>
        <section id="heading">
        <div className="grid-container" >
            <div className="grid-item">
                <h1 className="back-word">style</h1>
                <div className="content-1">
                    <h2>Don't blink</h2>      
                    <p>you will not see this again</p>
                    <button>start shoping</button>
                    <a href="">I'm a designer</a>
                </div>
                      
            </div>
            <div className="grid-item fornt-image">
                <img src="images/mainpic.jpg" alt="" />
            </div>
            <div className="content-2">
                <h2>Don't blink</h2>      
                <p>you will not see this again</p>
                <button>start shoping</button>
                <a href="">I'm a designe</a>
            </div>
           
        </div>

            </section>
        {loading ? (<LoadingBox />) : error ? ( <MessageBox variant="danger">{error}</MessageBox>) : (
            <section id="products">
                <div class="grid-container category">
                    <h1>Most Popular</h1>
                    <a href="">See All</a>
                </div>
                <div class="container">
            {products.map(product => (<Products key = {product._id} product = {product}/>))}
            </div>
            <div class="grid-container category">
                    <h1>New ariver</h1>
                    <a href="">See All</a>
            </div>
            <div class="grid-container">
            {products.map(product => (<Products key = {product._id} product = {product}/>))}
            </div>
            </section>
        )}
        </div>
            
    )
}

export default HomeScreen ;