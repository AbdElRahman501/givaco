import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartAction";

function Products(props){
    const { title , price , image , rating,numberOfRating,_id,content,inStoke } = props.product
    // const isLiked = props.product.isLiked? true : false
    const dispatch = useDispatch();

   const isLiked = props.theLikedItems?.find(x => x._id === _id)? true : false || props.product.isLiked? true : false
    return (
    <div className="card">
        <Link to={"products/"+_id}><img className="card-image" src={image} alt={title}  /></Link>
        {inStoke === 0 ?<p className="stock">out of stock</p> : "" }
            { isLiked? <button onClick={() => {props.removeFromLiked(_id)}} className="ancher">     
            <img className="icon revers heart-icon" src="/images/icons/icons8-heart-50fill.png" alt="" />
            </button>:<button onClick={() => {props.addToLiked(_id)}} className="ancher">
            <img className="icon revers heart-icon" src="/images/icons/icons8-heart-50.png" alt="" />
            </button>
            }
            <div className="info">
            <h2 className="title">{title}</h2>
            <p className="content">{content.length>25 ? content.slice(0,25)+"...":content }</p>
            {inStoke > 0 
            ?<button onClick={() => dispatch(addToCart(_id,1,"1","1"))}> <img className="icon revers" src="/images/icons/fi-rr-arrow-small-right.png" alt="" /> </button>
            : "" }
            <div className="rating">
            <img className="icon star-icon" src="/images/icons/Star.png" alt="" /> 
            <p > {rating} | {numberOfRating}</p>
            </div>
            
            <h3 className="price">{price} EGP</h3>
            </div>
    </div> 
    )
}

export default Products;

