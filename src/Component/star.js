import React from "react";

export default function star(prop) {
    let badgeText
    if (prop.data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (prop.data.location === "Online") {
        badgeText = "ONLINE"
    }
    return (        
        <div className="star-img">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={prop.data.coverImg} alt="star-1" className="star-1" />
            <div className="card-stats">
                <img src="./Images/Star.png" alt="star" className="card-star" />
                <span>{prop.data.stats.rating}</span>
                <span className="grey">({prop.data.stats.reviewCount}) . </span>
                <span className="grey">{prop.data.location}</span>
            </div>
            <p className="card-title">{prop.data.title}</p>
            <p className="card-price"><span className="Bold">From ${prop.data.price}</span> / person</p>
        </div>
    )
}