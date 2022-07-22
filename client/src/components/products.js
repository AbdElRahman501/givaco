import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../actions/cartAction";

function Products(props){
    const dispatch = useDispatch();
    const { name , price , image , rating,numberOfRating,_id,content,inStoke } = props.product
    const[isInStoke, setIsInStoke] = useState(true)
    const [item , setItem] = useState({})

    useEffect(() => {
        const stoke = []

        inStoke?.forEach(x => {
            const color = x.color
            x.sizes.forEach(x => {
                const size = x.size
                stoke.push(x.qty)
                x.qty>0 && setItem({color:color , size:size})
            });
        });
        Math.max(...stoke)>0? setIsInStoke(true) : setIsInStoke(false)
    },[inStoke]);


    

   const isLiked = props.theLikedItems?.find(x => x._id === _id)? true : false || props.product.isLiked? true : false
    return (
    <div className="card">
        <Link to={"/products/"+_id}><img className="card-image" src={image} alt={name}  /></Link>
        {isInStoke === false?<p className="stock">out of stock</p> : "" }
            { isLiked? <button onClick={() => {props.removeFromLiked(_id)}} className="ancher">     
            <img className="icon revers heart-icon" src="/images/icons/icons8-heart-50fill.png" alt="" />
            </button>:<button onClick={() => {props.addToLiked(_id)}} className="ancher">
            <img className="icon revers heart-icon" src="/images/icons/icons8-heart-50.png" alt="" />
            </button>
            }
            <div className="info">
            <h2 className="title">{name}</h2>
            <p className="content">{content.length>25 ? content.slice(0,25)+"...":content }</p>
            {isInStoke 
            ?<button onClick={() => {dispatch(addToCart(_id,1,item.color,item.size))}}> <img className="icon revers" src="/images/icons/fi-rr-arrow-small-right.png" alt="" /> </button>
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

