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
    
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const dispatch = useDispatch();
    useEffect(() => {
      if(productId){
        dispatch(addToCart(productId))
      }
    }, [dispatch,productId])

    const removeFromCartHandler = (id) => {
      dispatch(removeFromCart(id));
    };

    return (
      <section id="bag">
      <div className="grid-container">

        <h1>Shopping Cart</h1>
        {cartItems?.length === 0 ? (
          <MessageBox  variant="info">
            Cart is empty. <Link to="/">Go Shopping</Link>
          </MessageBox>
        ) : (
          <>
            {cartItems?.map((item) => (
              
              <div key = {item.id} className="grid-item">
              
            <div className="bag-card">
                <img src={item.image} alt={item.title}  />
                <div>
                <h1 className="title" >Over size T-shirt</h1>
                <span className="colors" ><i className="white-box" href=""></i> white | size = M</span>
                <p className="avilability"> In Stok</p>
                <h2 className="price white-text">{item.price}</h2>
                <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
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
                    <button onClick={() => removeFromCartHandler(item.product)} ><img className="icon" src="/images/icons/fi-rr-arrow-small-right.png" alt="" /></button>
                    
                    
                
                

            </div>

        </div>
            ))}
          </>
        )}
      <div className="grid-item">
            <h1>total price : ({cartItems?.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartItems?.reduce((a, c) => a + c.price * c.qty, 0)}</h1>
                <Link to={'/signin?redirect=shipping'}><button disabled={cartItems?.length === 0}>Check out</button></Link>
        </div>
    </div>
    
</section>
      );
    }




    

       
        
