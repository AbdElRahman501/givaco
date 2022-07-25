import React from "react"

export default function OrderTrackSteps(props){
    return(
        <div className="grid-container checkout-steps">
            <div className={props.step1? "active":""}>recived</div>
            <div className={props.step2? "active":""}>confirmed</div>
            <div className={props.step3? "active":""}>shipped</div>
            <div className={props.step4? "active":""}>arrives</div>

        </div>
    )
}