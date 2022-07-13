import React from "react";
import { useSelector } from "react-redux";


function Header() {
    const cart = useSelector(state => state.cart);
    const {cartItems} = cart 
    
    return (
         <header>
        <nav className="grid-container">
      
        <div className="grid-item menus"> <a href="/#"><img className="icon" src="/images/icons/menus.png" alt="" /></a> </div>
        <div className="grid-item">
            <a href="/" className="brand-name">GIVACO</a>
        </div>

        <div className= "grid-item center">
            <a href="/"><img className="icon"  src="/images/icons/home.png" alt="" /></a> 
            <a href="/#"><img className="icon" src="/images//icons/profile.png" alt="" /></a>
            <a href="/#"><img className="icon" src="/images//icons/heart.png" alt="" /></a>
            </div>
        <div className="grid-item">
            
            <a className="counter" href="/cart">{cartItems.length > 0 && (
            <span style={{backgroundColor: 'red'}}>{cartItems.length}</span>
        )}
        <img className="icon" src="/images/icons/Cart.png" alt="" /></a>
        </div>
    
          </nav>
</header>
    )
}

export default Header;






