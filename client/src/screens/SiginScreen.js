import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signin } from "../actions/userActions";


export default function SigninScreen(props) {
    let navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo ,loading , error} = userSignin

    const dispatch = useDispatch();

    function submitHandler(e) {
        e.preventDefault();
        dispatch(signin(email,password))
    };
    useEffect(() => {
        if(userInfo){
        navigate("/shiping")
        }
    }, [navigate,userInfo])
    return (
        <div id="signin" >
        <div className="grid-container">
            <button className='go-back ancher ' onClick={() => navigate(-1)}>
             <span className="in-top-page "><img className='icon revers' src='/images/icons/eva_arrow-back-outline.png' alt="icon" />Sign In Page</span>
            </button>
            <Link to="/shiping">
            <button className='go-back ancher ' >
             <span className="in-top-page ">Skipe<img className='icon revers' src='/images/icons/fi-rr-arrow-small-right.png' alt="icon" /></span>
            </button>
            </Link>
        </div>
            

                <form onSubmit={submitHandler}>
                    <h1>Sign In</h1>
                    {error && <h1 style={{color:"red" , fontSize:"10px"}}>{error}</h1>}
                    <label htmlFor="inp" className="inp">
                        <input type="email"
                            id="email"
                            placeholder="Enter email"
                            required
                            onChange={(e) => setEmail(e.target.value)} />
                        <svg style={{ width: "280px", height: "30px", viewBox: "0 0 280 18" }} className="border">
                            <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                        </svg>
                        <svg style={{ width: "14px", height: "12px", viewBox: "0 0 14 12" }} className="check">
                            <path d="M1 7 5.5 11 L13 1"></path>
                        </svg>
                    </label>
                    <label htmlFor="inp" className="inp">
                        <input type="password"
                            id="password"
                            placeholder="Enter passwod"
                            required
                            pattern=".{6,}"
                            onChange={(e) => setPassword(e.target.value)} />
                        <svg style={{ width: "280px", height: "30px", viewBox: "0 0 280 18" }} className="border">
                            <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                        </svg>
                        <svg style={{ width: "14px", height: "12px", viewBox: "0 0 14 12" }} className="check">
                            <path d="M1 7 5.5 11 L13 1"></path>
                        </svg>
                    </label>
                    <div>
                        <label />
                        <button className="primary" type="submit">
                        {loading ? <i className="fa fa-spinner fa-spin"/>  : "Sign In"}
                        </button>
                    </div>
                    <div>
                        <label />
                        New customer? <Link to="/register"> Creat you account</Link>
                    </div>
                    



                </form>

        </div>
    )
}
