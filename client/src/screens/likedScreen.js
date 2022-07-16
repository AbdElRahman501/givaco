import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromLiked } from "../actions/likedAction";
import Products from "../components/products";



export default function LikedScreen() {
    const dispatch = useDispatch();    

    function removeFromLikedHandler(id) {
        dispatch(removeFromLiked(id));
      }


const liked = useSelector((state) => state.liked);
const { likedItems } = liked;


    return ( <section id="products">
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
