import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SigninScreen() {
    let navigate = useNavigate();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    function submitHandler(e) {
        e.preventDefault();
    }
    return (
        <div id="signin" >
            <button className='go-back ancher ' onClick={() => navigate(-1)}> <span className="in-top-page "><img className='icon revers' src='/images/icons/eva_arrow-back-outline.png' alt="icon" />Sign In Page</span> </button>

                <form onSubmit={submitHandler}>
                    <h1>Sign In</h1>
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
                            Sign in
                        </button>
                    </div>
                    <div>
                        <label />
                        New customer? <Link to={"/register"}> Creat you account</Link>
                    </div>



                </form>

        </div>
    )
}
