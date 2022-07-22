import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToLiked, removeFromLiked } from "../actions/likedAction";
import { listProducts } from "../actions/productsActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Products from "../components/products";

export default function ShopeScreen() {
     const query = useParams().keyword;
     const [productId, setProductId] = useState();
    const liked = useSelector((state) => state.liked);
    const { likedItems } = liked;
     const productList = useSelector( state => state.productList);
     const {loading , error , products} = productList
     const dispatch = useDispatch();

     useEffect(() =>{
        dispatch(listProducts())
    },[dispatch])

    useEffect(() => {
        if(productId){
          dispatch(addToLiked(productId))
        }
      }, [dispatch,productId])
function removeFromLikedHandler(id) {
        dispatch(removeFromLiked(id));
        setProductId("");
      };

function addLiked(id){
   setProductId(id)
};


    return (
        <div>
        {loading ? (<LoadingBox />) : error ? ( <MessageBox variant="danger">{error}</MessageBox>) : (
        <section id="products">
        <div className="grid-container category stick-item">
                <h1>search products</h1>
                
        </div>
        <div className="grid-container">
        {products.filter(post => {
             if (query === '') {
               return "";
             } else if (post.name.toLowerCase().includes(query.toLowerCase()) 
             || post.category.toLowerCase().includes(query.toLowerCase()) || post.keywords.toLowerCase().includes(query.toLowerCase()) ) {
               return post;
             }
             }).map(product => (<Products key = {product._id} addToLiked={addLiked} product = {product} theLikedItems = {likedItems} removeFromLiked = {removeFromLikedHandler} />))
            }
        </div>
        </section>
    )}
    </div>
    )
}