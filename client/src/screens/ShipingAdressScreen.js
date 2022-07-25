import React, { useState } from "react"
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps"

export default function ShipingAdressScreen() {
    const [ promoCode , setPromoCode] = useState()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


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
    // for who skiped signin
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin





    function addPromoCode(e) {
        e.preventDefault();
        console.log(promoCode);
    };

    function submitHandler(e) {
        e.preventDefault();
    };

    return (
        <section id="shiping">
            <div className="grid-container go-back">
                <button className='go-back ancher ' onClick={() => userInfo?navigate(-2):navigate(-1)}>
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

            <form onSubmit={addPromoCode} className="grid-container item-body" style={{ backgroundColor: "unset",padding:"0"}} >
                <div  className="grid-container promo-code ">
                    <label htmlFor="inp" className="inp">
                        <input type="text"
                        id="Promo code"
                        pattern=".{6,}"
                        placeholder="Promo Code"
                        required
                        title="Promo Codes is more than 6 digits"
                        onChange={(e) => setPromoCode(e.target.value)} /><svg style={{ width: "280px", height: "30px", viewBox: "0 0 280 18" }} className="border">
                        <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                    </svg>
                    <svg style={{ width: "14px", height: "12px", viewBox: "0 0 14 12" }} className="check">
                        <path d="M1 7 5.5 11 L13 1"></path>
                    </svg>
                    </label>
                    
                </div>
                <button className="ancher" type="submit" ><img className='big-icon revers' src='/images/icons/plus-circle.png' alt="icon" /></button>
            </form>

{/* starting thr forms */}
                <div className="grid-container item-body" >
                    <form onSubmit={submitHandler} className="inp">


                    <label htmlFor="inp" className="inp">
                    <input type="name" id="First-Name" placeholder="Alberto" required />
                    <svg style={{ width: "280px", height: "30px", viewBox: "0 0 280 18" }} className="border">
                    <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12">
                    </path></svg>
                    <svg style={{ width: "14px", height: "12px", viewBox: "0 0 14 12" }} className="check"><path d="M1 7 5.5 11 L13 1"></path></svg>
                    </label> 
                    <hr />
                    <label htmlFor="inp" className="inp">
                    <input type="name" id="last-Name" placeholder="denaro"  required />
                    <svg style={{ width: "280px", height: "30px", viewBox: "0 0 280 18" }} className="border">
                    <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12">
                    </path></svg>
                    <svg style={{ width: "14px", height: "12px", viewBox: "0 0 14 12" }} className="check"><path d="M1 7 5.5 11 L13 1"></path></svg>
                    </label>
                    <hr />
                    <label htmlFor="inp" className="inp">
                    <input type="number" id="phonenumber" placeholder="01 --- --- ---" required pattern=".{11,}" title=" you phone number dosent correct"/>
                    <svg style={{ width: "280px", height: "30px", viewBox: "0 0 280 18" }} className="border">
                    <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12">
                    </path></svg>
                    <svg style={{ width: "14px", height: "12px", viewBox: "0 0 14 12" }} className="check"><path d="M1 7 5.5 11 L13 1"></path></svg>
                    </label>
                    <hr />
                    <label htmlFor="inp" className="inp">
                    <textarea type="text" id="notes" placeholder="order notes (optional)"  rows="5"/>
                    <svg style={{ width: "280px", height: "30px", viewBox: "0 0 280 18" }} className="border">
                    <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12">
                    </path></svg>
                    <svg style={{ width: "14px", height: "12px", viewBox: "0 0 14 12" }} className="check"><path d="M1 7 5.5 11 L13 1"></path></svg>
                    </label>




               </form>
            </div>
            
        </section>
    )
}