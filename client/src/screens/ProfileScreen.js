import React from "react"
import { useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import OrderTrackSteps from "../components/OrderTrackSteps";

export default function ProfileScreen() {
    // for navigat
    let navigate = useNavigate();
    
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin

    return (
        <section id="shiping">
            <div className="grid-container go-back">
                <button className='go-back ancher ' onClick={() => navigate(-2)}>
                    <span className="in-top-page "><img className='icon revers' src='/images/icons/eva_arrow-back-outline.png' alt="icon" />Profile</span>
                </button>
            </div>
            <OrderTrackSteps step1 />
            <h3> hello { userInfo.name} </h3> 
        </section>
    )
}