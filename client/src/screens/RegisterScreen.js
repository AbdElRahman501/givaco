import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../actions/userActions";


export default function RegisterScreen(props) {
    let navigate = useNavigate();
    const [alert , setAlert] = useState()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    

    const userRegister = useSelector((state) => state.userRegister);
    const {userInfo ,loading , error} = userRegister

    const dispatch = useDispatch();

    function submitHandler(e) {
        e.preventDefault();
        if(password !== confirmPassword){
            setAlert("Password and confirm Password are not match")
        }else{
           dispatch(register(name,email,password)) 
        }
        
    };
    useEffect(() => {
        if(userInfo){
        navigate("/")
        }
    }, [navigate,userInfo])
    return (
        <div id="signin" >
            <div className="grid-container">
            <button className='go-back ancher ' onClick={() => navigate(-1)}>
             <span className="in-top-page "><img className='icon revers' src='/images/icons/eva_arrow-back-outline.png' alt="icon" />register page</span>
            </button>
        </div>
                <form onSubmit={submitHandler}>
                    <h1>Creat Account</h1>
                    {error && <h1 style={{color:"red" , fontSize:"10px"}}>{error===500? "your email is already exist":"there is somthing wrong please try again later"}</h1>}
                    {alert && <h1 style={{color:"red" , fontSize:"10px"}}>{alert}</h1>}
                    <label htmlFor="inp" className="inp">
                        <input type="name"
                            id="name"
                            placeholder="Alperto"
                            required
                            onChange={(e) => setName(e.target.value)} />
                        <svg style={{ width: "280px", height: "30px", viewBox: "0 0 280 18" }} className="border">
                            <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                        </svg>
                        <svg style={{ width: "14px", height: "12px", viewBox: "0 0 14 12" }} className="check">
                            <path d="M1 7 5.5 11 L13 1"></path>
                        </svg>
                    </label>
                    <label htmlFor="inp" className="inp">
                        <input type="email"
                            id="email"
                            placeholder="example@email.com"
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
                            placeholder="Password"
                            required
                            pattern=".{6,}"
                            title="password should be more than 6 digits"
                            onChange={(e) => setPassword(e.target.value)} />
                        <svg style={{ width: "280px", height: "30px", viewBox: "0 0 280 18" }} className="border">
                            <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                        </svg>
                        <svg style={{ width: "14px", height: "12px", viewBox: "0 0 14 12" }} className="check">
                            <path d="M1 7 5.5 11 L13 1"></path>
                        </svg>
                    </label>
                    <label htmlFor="inp" className="inp">
                        <input type="password"
                            id="Confirm Password"
                            placeholder="Confirm Password"
                            required
                            pattern=".{6,}"
                            onChange={(e) => setConfirmPassword(e.target.value)} />
                        <svg style={{ width: "280px", height: "30px", viewBox: "0 0 280 18" }} className="border">
                            <path d="M0,12 L223.166144,12 C217.241379,12 217.899687,12 225.141066,12 C236.003135,12 241.9279,12 249.827586,12 C257.727273,12 264.639498,12 274.514107,12 C281.097179,12 281.755486,12 276.489028,12"></path>
                        </svg>
                        <svg style={{ width: "14px", height: "12px", viewBox: "0 0 14 12" }} className="check">
                            <path d="M1 7 5.5 11 L13 1"></path>
                        </svg>
                    </label>
                    <div>
                        <label />
                        <button className="primary" type="submit" onClick={() => {setAlert()}}>
                        {loading ? <i className="fa fa-spinner fa-spin"/>  : "Register"}
                        </button>
                    </div>
                    <div>
                        <label />
                        Already have account? <Link to={"/signin"}> Sign In</Link>
                    </div>



                </form>

        </div>
    )
}
