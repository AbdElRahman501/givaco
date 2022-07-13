import React from "react";
import { Link } from "react-router-dom";

function Products(props){
    const { title , price , image , rating,numberOfRating,_id,content } = props.product
    return (
    <div className="card">
        <Link to={"products/"+_id}><img className="card-image" src={image} alt=""  /></Link>
            <a href="/#"> <img className="icon heart-icon" src="images/icons/heart.png" alt="" /></a>
            <h2 className="title">{title}</h2>
            <p className="content">{content}</p>
            <Link to={"/cart/"+_id+"?qty=1"}><button> <img className="icon" src="images/icons/fi-rr-arrow-small-right.png" alt="" /> </button></Link>
            <img className="icon star-icon" src="images/icons/Star.png" alt="" /> 
            <p className="rating"> {rating} | {numberOfRating}</p>
            <h3 className="price">{price}</h3>
    </div> 
    )
}

export default Products;

