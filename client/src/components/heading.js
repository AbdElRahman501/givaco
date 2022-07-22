import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listProducts } from "../actions/productsActions";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import DarkModeToggle from "react-dark-mode-toggle";



function Header(props) {
    // for search engine
    const [query, setQuery] = useState("")
    const productList = useSelector( state => state.productList);
    const {loading , error , products} = productList
    const dispatch = useDispatch();    

    useEffect(() =>{
        dispatch(listProducts())
    },[dispatch])
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

        <div className= {isTogled? "grid-item center expand":"grid-item center" } >
        
        {isTogled?
            <div className="search-bar">
            <input placeholder="Enter Post name" onChange={event => setQuery(event.target.value)} />
            {loading ? (<LoadingBox />) : error ? ( <MessageBox variant="danger">{error}</MessageBox>) : (
            <ul>
            {products.filter(post => {
             if (query === '') {
               return "";
             } else if (post.name.toLowerCase().includes(query.toLowerCase()) 
             || post.category.toLowerCase().includes(query.toLowerCase()) || post.keywords.toLowerCase().includes(query.toLowerCase()) ) {
               return post;
             }
             }).map((product,index) => (<li key={index} onClick={() => {setQuery("") ; setTogled(false)}}>
             <Link to={"/shope/"+product.category}>
              {product.category}
             </Link></li>))
            }
           </ul>
            )}
            
            </div>
           
      
        :""}
        {isSlected === "home"
        ? <Link to={"/"}><img className="icon"  src="/images/icons/home.png" alt="" />{isTogled?"Home":""}</Link> 
        :<Link to={"/"} onClick={() => {setSelected("home");setTogled(false)}}><img className="icon"  src="/images/icons/homestrok.png" alt="" /></Link>
        }
        {isSlected === "profile"
        ? <Link to={"/#"}><img className="icon" src="/images/icons/userfill.png" alt="" />{isTogled?"Profile":""}</Link> 
        :<Link to={"/#"} onClick={() => {setSelected("profile");setTogled(false)}}><img className="icon" src="/images/icons/profile.png" alt="" /></Link>
        }
        {isTogled? <DarkModeToggle
        onChange={() => props.setIsDarkMode(props.isDarkMode?false:true)}
        checked={props.isDarkMode}
        size={80}
        />:"" }
        
        </div>
        <div className="grid-item left">
        {isSlected === "liked"
        ? <Link to={"/Favorite"}><img className="icon" src="/images/icons/icons8-heart-50fill.png" alt="" /></Link> 
        :<Link to={"/Favorite"} onClick={() => {setSelected("liked");setTogled(false)}}><img className="icon" src="/images/icons/icons8-heart-50.png" alt="" /></Link>
        }
        <Link className="counter" to={"/cart"} onClick={() => setSelected("Cart")}>
        {cartItems && cartItems.length > 0 && (
        <span style={{backgroundColor: 'red'}}>{cartItems.length}</span> )}
        <img className="icon" src="/images/icons/Cart.png" alt="" /></Link>
        </div>
    
        </nav>
        {isTogled?<button className="display-button" onClick={() => {setTogled(false)}}></button>:""}
        
        </header>
    )
}

export default Header;






