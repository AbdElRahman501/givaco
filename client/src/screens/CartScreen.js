import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartAction';
import MessageBox from '../components/MessageBox';

export default function CartScreen() {

    const productId = useParams()._id
    const {search} = useLocation();
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl?Number(qtyInUrl):1;
    const colorInUrl = new URLSearchParams(search).get('color');
    const colorId = colorInUrl?Number(colorInUrl):'1';
    const sizeInUrl = new URLSearchParams(search).get('size');
    const sizeId = sizeInUrl?Number(sizeInUrl):'1';
    
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const dispatch = useDispatch();
    useEffect(() => {
      if(productId){
        dispatch(addToCart(productId, qty,colorId,sizeId))
      }
    }, [dispatch,productId , qty,colorId,sizeId])

    const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id));
    };

    return (
      <section id="bag">
      <Link to={productId? "/products/"+productId : "/"} className='go-back'>
      <img className='icon revers' src='/images/icons/eva_arrow-back-outline.png' ></img>
      Shopping Cart</Link>
      <div className="grid-container">

        
        {cartItems?.length === 0 ? (
          <MessageBox  variant="info">
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <>
          <div  className="grid-item">
            {cartItems?.map((item) => (
              
              
              
            <div key = {item.id} className="bag-card">
            <Link to={"/products/"+item.product}><img className='item-img' src={item.image} alt={item.title} /></Link>
                <div>
                <Link to={"/products/"+item.product}><h1 className="title" >Over size T-shirt</h1> </Link>
                
                <span className="colors" ><i className="white-box" href=""></i> {item.color} | size = {item.size}</span>
                <p className="avilability access"> In Stok</p>
                <h2 className="price white-text">{item.price} EGP </h2>
                <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value ),colorId,sizeId)
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
                    <button className='delet' onClick={() => removeFromCartHandler(item.product)} >
                    <img className="icon" src="/images/icons/gg_trash-empty.png" alt="" />
                    </button>
                    
            </div>

        
            ))}
            </div>
            <div className="grid-item">
        <div class="check-out">
          <h6>total price : </h6>
            <p className="white-text">({cartItems?.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartItems?.reduce((a, c) => a + c.price * c.qty, 0)}</p>
                <Link to={'/signin?redirect=shipping'}><button disabled={cartItems.length === 0}>Check out</button></Link>
        </div>    
      </div>
          </>
        )}
        
      
  </div>
    
</section>
      );
    }




    

       
        
