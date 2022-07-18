import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartAction';
import MessageBox from '../components/MessageBox';

export default function CartScreen() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <section id="bag">
      <Link to={"/"} className='go-back'>
        <img className='icon revers' src='/images/icons/eva_arrow-back-outline.png' ></img>
        Shopping Cart</Link>
      <div className="grid-container">


        {cartItems?.length === 0 ? (
          <MessageBox variant="info">
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <>
            <div className="grid-item">
              {cartItems?.map((item, index) => (



                <div key={index} className="bag-card">
                  <Link to={"/products/" + item.product}><img className='item-img' src={item.image} alt={item.title} /></Link>
                  <div>
                    <Link to={"/products/" + item.product}><h1 className="title" >Over size T-shirt</h1> </Link>

                    <span className="colors" ><i className="white-box" href=""></i> {item.color} | size = {item.size}</span>
                    {item.inStoke === 0 ? <p className="avilability failed"> out of stock</p> : <p className="avilability success"> in stock</p>}
                    <h2 className="price white-text">{item.price} EGP </h2>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value), item.color, item.size)
                        )
                      }
                    >
                      {[...Array(item.inStoke).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button className='delet' onClick={() => removeFromCartHandler(item)} >
                    <img className="icon" src="/images/icons/gg_trash-empty.png" alt="" />
                  </button>

                </div>


              ))}
            </div>
            <div className="grid-item">
              <div className="check-out">
                <h6>total price :{cartItems.find(x => x.inStoke === 0) ? <span className='failed'> one of items out of stock</span> : ""} </h6>
                <p className="white-text">({cartItems?.reduce((a, c) => a + c.qty, 0)} items) : $
                  {cartItems?.reduce((a, c) => a + c.price * c.qty, 0)}</p>
                <Link to={'/signin?redirect=shipping'}><button disabled={cartItems.find(x => x.inStoke === 0) ? true : false}>Check out</button></Link>
              </div>
            </div>
          </>
        )}


      </div>

    </section>
  );
}








