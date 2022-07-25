import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import DarkModeToggle from "react-dark-mode-toggle";
import { signout } from "../actions/userActions";
import { listProducts } from "../actions/productsActions";



function Header(props) {
    // for search engine
    const [query, setQuery] = useState("")
    const productList = useSelector(state => state.productList);
    const { loading, error, products } = productList
    const dispatch = useDispatch();
    //for cart counter  
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart
    //for selecting active page
    const cuurentPage = useLocation().pathname
    const [isSlected, setSelected] = useState("")
    const [isTogled, setTogled] = useState(false)
    //for user infos
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;



    useEffect(() => {
        cuurentPage !== "/" && dispatch(listProducts());
        setSelected(cuurentPage)

    }, [cuurentPage, dispatch])


    const signoutHandler = () => {
        dispatch(signout())
    }
    return (
        <header className="stick-item">
            <nav className="grid-container">
                <div className="grid-item menus">
                    <button onClick={() => { isTogled ? setTogled(false) : setTogled(true) }} className="ancher"><img className="icon" src="/images/icons/menus.png" alt="" /></button>
                </div>
                <div className="grid-item">
                    <Link to={"/"} onClick={() => { setSelected("home"); setTogled(false) }} >
                        <img src="/images/icons/GIVACOBLACK.png" className="brand-name" alt="GIVACO" />
                    </Link>
                </div>

                <div className={isTogled ? "grid-item center expand" : "grid-item center"} >

                    {isTogled ?
                        <div className="search-bar">
                            <input placeholder="Enter Post name" onChange={event => setQuery(event.target.value)} />
                            {loading ? <div className="grid-container item-body">
                                <i className="fa fa-spinner fa-spin" />
                            </div> : error ? (<MessageBox variant="danger">{error}</MessageBox>) : (
                                <ul>
                                    {products.filter(post => (query === ''
                                        ? ""
                                        : post.name.toLowerCase().includes(query.toLowerCase())
                                            || post.category.toLowerCase().includes(query.toLowerCase())
                                            || post.keywords.toLowerCase().includes(query.toLowerCase())
                                            ? post
                                            : "")).map((product, index) => (
                                                <li key={index} onClick={() => { setQuery(""); setTogled(false) }}>
                                                    <Link to={"/shope/" + product.category}>
                                                        {product.category}
                                                    </Link>
                                                </li>))
                                    }
                                </ul>
                            )}
                        </div>
                        : ""}

                    <Link to={"/"} onClick={() => { setTogled(false) }}>
                        <img className="icon" src={isSlected === "/" ? "/images/icons/home.png" : "/images/icons/homestrok.png"} alt="" />
                        {isTogled ? "Home" : ""}
                    </Link>


                    {
                        userInfo ? (
                            <div className="dropdown">
                                <Link to="#" className="dropbtn" ><img className="icon profile-active" src="/images/icons/userfill.png" alt="" />{isTogled ? "profile" : ""}</Link>
                                <div className="dropdown-content">
                                    <Link to="/profile" onClick={() => { setTogled(false) }} > {userInfo.name} </Link>
                                    <a href="/" onClick={signoutHandler} className="signout" > signout</a>
                                </div>
                            </div>
                        )
                            : <Link to="/signin?redirect=profile" onClick={() => { setTogled(false) }}>
                                <img className="icon" src={isSlected === "/signin" ? "/images/icons/userfill.png" : "/images/icons/profile.png"} alt="" />
                                {isTogled ? "Profile" : ""}
                            </Link>
                    }

                    <Link to={"/Favorite"} onClick={() => { setTogled(false) }}>
                        <img className="icon" src={isSlected === "/Favorite" ? "/images/icons/icons8-heart-50fill.png" : "/images/icons/icons8-heart-50.png"} alt="" />
                        {isTogled ? "favorits" : ""}
                    </Link>


                    {isTogled ? <DarkModeToggle
                        onChange={() => props.setIsDarkMode(props.isDarkMode ? false : true)}
                        checked={props.isDarkMode}
                        size={40}
                    /> : ""}

                </div>
                <div className="grid-item left">

                    <Link to={"/Favorite"} className="mopile-display-only" onClick={() => { setTogled(false) }}>
                        <img className="icon" src={isSlected === "/Favorite" ? "/images/icons/icons8-heart-50fill.png" : "/images/icons/icons8-heart-50.png"} alt="" />
                    </Link>

                    <Link className="counter" to={"/cart"} onClick={() => setSelected("Cart")}>
                        {cartItems && cartItems.length > 0 && (
                            <span style={{ backgroundColor: 'red' }}>{cartItems.length}</span>
                        )}
                        <img className="icon" src="/images/icons/Cart.png" alt="" />
                    </Link>
                </div>

            </nav>
            {isTogled ? <button className="display-button" onClick={() => { setTogled(false) }}></button> : ""}
        </header>
    )
}

export default Header;






