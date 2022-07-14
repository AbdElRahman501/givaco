import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { detailsProduct } from "../actions/productsActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function ProductScreen(){
    const dispatch = useDispatch();
    const productId = useParams()._id;
    const [qty , setQty] = useState(1);
    const productDetalis = useSelector( state => state.productDetalis);
    const {loading, error, product} = productDetalis    
    useEffect(() => {
        dispatch(detailsProduct(productId));
    },[dispatch,productId ]);
    

    
    if (!product) {
        return <div className="alert alert-danger">product not found</div>
    }else{
        return (
            <div>
        {loading ? (<LoadingBox />) : error ? ( <MessageBox variant="danger">{error}</MessageBox>) : (
            <section id="item">
            <div className="grid-container">
                    
                <div className="grid-item">
                    
                    <img className="card-image large" src={product.image} alt={product.title} /> 
                    
                    <div className="card-side-image">
                        <a href="/#"><img className="side-image " src={product.image} alt="" /></a>
                    <a href="/#"><img className="side-image selected" src={product.image} alt=""  /></a>
                    <a href="/#"><img className="side-image" src={product.image} alt="" /></a>
                    </div>
                    
                </div>
                <div className="grid-item">
                    <h1 className="title white-text">{product.title}</h1>
                    <p className="status">{product.content} </p>
                    <div className="rating">
                    <span>
                         <i className={product.rating >= 1 ? "fa fa-star" : product.rating >= 0.5 ? "fa fa-star-half-o" :"fa fa-star-o" } />
                         <i className={product.rating >= 2 ? "fa fa-star" : product.rating >= 1.5 ? "fa fa-star-half-o" :"fa fa-star-o" } />
                         <i className={product.rating >= 3 ? "fa fa-star" : product.rating >= 2.5 ? "fa fa-star-half-o" :"fa fa-star-o" } />
                         <i className={product.rating >= 4 ? "fa fa-star" : product.rating >= 3.5 ? "fa fa-star-half-o" :"fa fa-star-o" } />
                         <i className={product.rating >= 5 ? "fa fa-star" : product.rating >= 4.5 ? "fa fa-star-half-o" :"fa fa-star-o" } />
                     </span>
                        </div>
                    <h2 className="price white-text">{product.price}</h2>
                    <div className="colors" >
                        <a className="white-box " href=""></a>
                        <a className="black-box selected" href=""></a>
                    </div>
                    <div className="sizing" >
                        <a className="" href="/#">M</a>
                        <a className="" href="/#">L</a>
                        <a className="selected" href="/#">XL</a>
                        <a className="" href="/#">2XL</a>
                    </div>
                    <p className="avilability">avilapility :{product.inStoke>0 ?<span className="success"> In Stoke</span> : <span className="failed"> Out Of Stoke</span> }</p>
                    <hr />
                    <p className="qty">QWANTITY</p> 
                    {
                        product.inStoke > 0 && (
                        <>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.inStoke).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                       <div>

                        <Link to={"/cart/"+productId+"?qty="+qty}><button className="primary block">add to bag</button>
                        </Link>
                        <hr />
                        <Link to={"/cart/"+productId+"?qty="+qty}><button>Check Out</button></Link>
                         
                       </div>
                        </>
                         
                     )
                    }
                    
                </div>

            </div>
    </section>
            
         )}
         </div>
         
        )
        
    }
}


    

export default ProductScreen;

