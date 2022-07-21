import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams , useNavigate } from "react-router-dom";
import { addToCart } from "../actions/cartAction";
import { detailsProduct } from "../actions/productsActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

function ProductScreen() {
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const productId = useParams()._id;

    const [inStoke , setInStoke] = useState()
    const [qty, setQty] = useState(1);
    const [imageId, setImageId] = useState(0)
    const [itemColor, setColor] = useState()
    const [itemSize, setsize] = useState()
    const [homeImage, setHomeImage] = useState("")



    const productDetalis = useSelector(state => state.productDetalis);
    const { loading, error, product } = productDetalis
    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);


    if (!product) {
        return <div className="grid-container"><div className=" alert alert-danger">product not found</div></div>
    } else {
        const { sideImages, sizes} = product

        return (
            <div>
                {loading ? (<LoadingBox />) : error ? (<MessageBox variant="danger">{error}</MessageBox>) : (
                    <section id="item">
                        <button className='go-back ancher ' onClick={() => navigate(-1)}> <span className="in-top-page "><img className='icon revers' src='/images/icons/eva_arrow-back-outline.png' alt="icon"/></span> </button> 
                        <div className="grid-container">

                            <div className="grid-item">

                                <img className="card-image large" src={homeImage || product.image} alt={product.title} />

                                <div className="card-side-image">
                                    {sideImages.map((image, index) => {
                                        return index === imageId
                                            ? <button key={index} onClick={() => setImageId(index)}><img className="side-image selected" src={image} alt={product.title} /></button>
                                            : <button key={index} onClick={() => { setImageId(index); setHomeImage(image) }}><img className="side-image " src={image} alt={product.title} /></button>
                                    })}
                                </div>

                            </div>
                            <div className="grid-item">
                                <h1 className="title white-text">{product.title}</h1>
                                <p className="status">{product.content} </p>
                                <div className="rating">
                                    <span>
                                        <i className={product.rating >= 1 ? "fa fa-star" : product.rating >= 0.5 ? "fa fa-star-half-o" : "fa fa-star-o"} />
                                        <i className={product.rating >= 2 ? "fa fa-star" : product.rating >= 1.5 ? "fa fa-star-half-o" : "fa fa-star-o"} />
                                        <i className={product.rating >= 3 ? "fa fa-star" : product.rating >= 2.5 ? "fa fa-star-half-o" : "fa fa-star-o"} />
                                        <i className={product.rating >= 4 ? "fa fa-star" : product.rating >= 3.5 ? "fa fa-star-half-o" : "fa fa-star-o"} />
                                        <i className={product.rating >= 5 ? "fa fa-star" : product.rating >= 4.5 ? "fa fa-star-half-o" : "fa fa-star-o"} />
                                    </span>
                                </div>
                                <h2 className="price white-text">{product.price} EGP</h2>
                                <div className="colors" >
                                {product.inStoke?.map((x, index) => {
                                        const color = x.color
                                       return x.sizes.find(x => x.qty !==0)?
                                         color === itemColor
                                            ? <button key={index}><span className="color-box selected" style={{ backgroundColor: color }}></span></button>
                                            : <button key={index} onClick={() => {setColor(color);
                                            setInStoke(product.inStoke?.find((x) => x.color === color)?.sizes.find(x => x.size === itemSize)?.qty)}} 
                                            ><span className="color-box" style={{ backgroundColor: color }}></span></button>
                                        :<button key={index}><span className="color-box disapled" style={{ backgroundColor: color }}></span></button>

                                    })}
                                </div>
                                {itemColor? <div className="sizing" >
                                    {sizes.map((size, index) => {
                                       return product?.inStoke?.find((x) => x.color === itemColor)?.sizes.find(x => x.size === size)?.qty !==0 
                                        ? size === itemSize
                                            ? <button key={index}><span className="selected" >{size}</span></button>
                                            : <button key={index} onClick={() => {setsize(size);
                                            setInStoke(product?.inStoke?.find((x) => x.color === itemColor)?.sizes.find(x => x.size === size)?.qty)
                                            }}  ><span className="" >{size}</span></button>
                                        :<button key={index}><span className="disapled" >{size}</span></button>

                                    })}
                                </div> :""}
                                
                                <p className="avilability">avilapility :{itemColor?itemSize?inStoke>0 
                                ? <span className="success"> In Stoke</span> 
                                : <span className="failed"> Out Of Stoke</span>:<span className="white-text"> unchosen size</span> : <span className="white-text"> unchosen color</span>}
                                {inStoke<5 && inStoke>=1? "  only "+inStoke+" pices left " : ""}</p>
                                <hr />
                                <p className="qty">QWANTITY </p>
                                
                                    {inStoke? inStoke > 0 && (
                                        <>
                                            <select
                                                value={qty}
                                                onChange={(e) => setQty(e.target.value)}
                                            >
                                                {[...Array(inStoke).keys()].map(
                                                    (x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                            
                                        </>

                                    )
                                : ""}
                                <div>
                                                <Link to={"/cart"}><button disabled={itemColor?itemSize?inStoke>0?false:true:true:true } onClick={() => dispatch(addToCart(productId, qty, itemColor, itemSize))} className="primary block">add to bag</button>
                                                </Link>
                                                <hr />
                                                {itemColor?itemSize?inStoke>0
                                                ?<Link to={"/cart/" + productId + "?qty=" + qty} ><button>Check Out</button></Link>
                                                :"":"":"" }

                                            </div>

                            </div>

                        </div>
                    </section>

                )}
            </div>

        )

    }
}




export default ProductScreen;

