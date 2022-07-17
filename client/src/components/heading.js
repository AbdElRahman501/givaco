import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


function Header() {
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart 
    const [isSlected , setSelected] = useState("home")
    const [isTogled , setTogled] = useState(false)

    return (
        <header className="stick-item">
        <nav className="grid-container">
      
        <div className="grid-item menus"> 
        <button onClick={() => {isTogled?setTogled(false):setTogled(true)}} className="ancher"><img className="icon" src="/images/icons/menus.png" alt="" /></button> 
        </div>
        <div className="grid-item">
        <Link to={"/"} onClick={() => {setSelected("home");setTogled(false)}} className="brand-name">
            GIVACO
        </Link>
        </div>

        <div className= {isTogled?"grid-item center expand":"grid-item center"} >
        
        {isSlected === "home"
        ? <Link to={"/"}><img className="icon"  src="/images/icons/home.png" alt="" />{isTogled?"Home":""}</Link> 
        :<Link to={"/"} onClick={() => {setSelected("home");setTogled(false)}}><img className="icon"  src="/images/icons/homestrok.png" alt="" /></Link>
        }
        {isSlected === "profile"
        ? <Link to={"/#"}><img className="icon" src="/images/icons/userfill.png" alt="" />{isTogled?"Profile":""}</Link> 
        :<Link to={"/#"} onClick={() => {setSelected("profile");setTogled(false)}}><img className="icon" src="/images/icons/profile.png" alt="" /></Link>
        }
        {isSlected === "liked"
        ? <Link to={"/Favorite"}><img className="icon" src="/images/icons/icons8-heart-50fill.png" alt="" />{isTogled?"Fav":""}</Link> 
        :<Link to={"/Favorite"} onClick={() => {setSelected("liked");setTogled(false)}}><img className="icon" src="/images/icons/icons8-heart-50.png" alt="" /></Link>
        }
        </div>
        <div className="grid-item">
            
            <a className="counter" href="/cart">{cartItems && cartItems.length > 0 && (
            <span style={{backgroundColor: 'red'}}>{cartItems.length}</span>
        )}
        <img className="icon" src="/images/icons/Cart.png" alt="" /></a>
        </div>
    
        </nav>
        {isTogled?<button className="display-button" onClick={() => {setTogled(false)}}></button>:""}
        
        </header>
    )
}

export default Header;






