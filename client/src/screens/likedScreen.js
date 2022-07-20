import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";
import { removeFromLiked } from "../actions/likedAction";
import Products from "../components/products";



export default function LikedScreen() {
    const dispatch = useDispatch();  
    let navigate = useNavigate();
  

    function removeFromLikedHandler(id) {
        dispatch(removeFromLiked(id));
      }


const liked = useSelector((state) => state.liked);
const { likedItems } = liked;


    return ( <section id="products">
    <button className='go-back ancher' onClick={() => navigate(-1)}> <span className="in-top-page"><img className='icon revers' src='/images/icons/eva_arrow-back-outline.png' ></img>  Product page</span> </button> 

    <div className="grid-container category">
            <h1>Favorite items</h1>
            <a href="/#">See All</a>
        </div>
        {likedItems.length>0 ? 
        <div className="grid-container">
    {likedItems.map(product => (<Products 
    key = {product._id} product = {product} removeFromLiked = {removeFromLikedHandler} 

    /> ))}
    </div>:''}
    </section>
        
    )
    
    
}
