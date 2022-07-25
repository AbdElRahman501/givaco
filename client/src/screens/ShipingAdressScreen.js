import React from "react"
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps"
import LoadingBox from "../components/LoadingBox";

export default function ShipingAdressScreen() {
    // for navigat
    let navigate = useNavigate();
    // for adding single item
    let { id } = useParams()
    const { search } = useLocation();
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl ? Number(qtyInUrl) : 1;
    const colorInUrl = new URLSearchParams(search).get('color');
    const sizeInUrl = new URLSearchParams(search).get('size');

    const productList = useSelector(state => state.productList);
    const { loading, products } = productList

    const product = id && products?.find((x) => x._id === id);

    // for adding cart items

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    // for who skioed signin
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin

    return (
        <section id="shiping">
            <div className="grid-container go-back">
                <button className='go-back ancher ' onClick={() => navigate(-2)}>
                    <span className="in-top-page "><img className='icon revers' src='/images/icons/eva_arrow-back-outline.png' alt="icon" />Checkout</span>
                </button>
            </div>
            <CheckoutSteps step1 step2 />
            {userInfo?<h3> hello { userInfo.name} </h3> : 
            <div className="grid-container item-body">
               <input type="text" placeholder="Name" /> 
            </div>
            }
            
            <hr />
            <h3>Shipping Adress</h3>
            <div className="grid-container item-body">
                <div className="grid-container">
                    <img className='big-icon ' src='/images/icons/locationicon.png' alt="icon" />
                    <div>
                        <h4>Home</h4>
                        <p>3 kolit el tegara street</p>
                    </div>
                </div>
                <img className='big-icon ' src='/images/icons/ic_twotone-edit-location.png' alt="icon" />

            </div>
            <hr />
            <h3>Order List</h3>
            {loading ? <div className="grid-container item-body">
            <i className="fa fa-spinner fa-spin" />
            </div> : product ? <div className="grid-container item-body">
                <div className="grid-container">
                    <img className="mid-image" src={product.image} alt={product.name} />
                    <div className="content">
                        <h4> {product.name} </h4>
                        <p className="colors"><i className="color-box" style={{ backgroundColor: colorInUrl }} /> | size {sizeInUrl}</p>
                        <h6> EGP {product.price} </h6>
                    </div>
                </div>
                <i className="count-circl" > {qty} </i>
            </div>
                : cartItems.map((item, index) => (
                    <div key={index} className="grid-container item-body">
                        <div className="grid-container">
                            <img className="mid-image" src={item.image} alt={item.name} />
                            <div className="content">
                                <h4> {item.name} </h4>
                                <p className="colors"><i className="color-box" style={{ backgroundColor: item.color }} /> | size {item.size}</p>
                                <h6> EGP {item.price} </h6>
                            </div>
                        </div>
                        <i className="count-circl" >{item.qty}</i>
                    </div>
                ))}
            
            <hr />
            <h3>Choose Shipping</h3>

            <div className="grid-container item-body">
                <div className="grid-container">
                    <img className='big-icon revers' src='/images/icons/van.png' alt="icon" />
                    <h4>Choose shipping type</h4>
                </div>
                <img className='big-icon revers' src='/images/icons/eva_arrow-right-fill.png' alt="icon" />
            </div>
            <hr />
            <h3>Promo Code</h3>

            <div className="grid-container item-body" >
                <div className="grid-container ">
                    <form><input type="text" placeholder="Enter Promo Code"></input></form>
                </div>
                <button className="ancher"><img className='big-icon revers' src='/images/icons/plus-circle.png' alt="icon" /></button>
            </div>
            <form>

            </form>



        </section>
    )
}