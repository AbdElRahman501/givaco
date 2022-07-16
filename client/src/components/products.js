import React from "react";
import { Link } from "react-router-dom";

function Products(props){
    const { title , price , image , rating,numberOfRating,_id,content,inStoke } = props.product
    // const isLiked = props.product.isLiked? true : false
    
   const isLiked = props.theLikedItems?.find(x => x._id === _id)? true : false || props.product.isLiked? true : false
    return (
    <div className="card">
        <Link to={"products/"+_id}><img className="card-image" src={image} alt=""  /></Link>
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
            {inStoke > 0 ?<Link to={"/cart/"+_id+"?qty=1&color=1&size=1"}>
            <button> <img className="icon revers" src="/images/icons/fi-rr-arrow-small-right.png" alt="" /> </button></Link> : "" }
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

