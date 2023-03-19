import React, { useState} from "react";
import img1 from "../assets/img-1.jpg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";

export const Home =  ()  => {
    
    const [ text_Section_1 ] = useState("Transform your space with our ");
    const [ furniture ] = useState("furniture ");
    const [ text_section_2] = useState("and interieur design.");

    return (
        <>
        <section id="Home" style={{backgroundImage: `url(.${img1})`}}>
            <div className="home">
                <h1 className="text_home">
                    <span className="text_1">{ text_Section_1 }</span>
                    <span className="text_2">{ furniture }</span>
                    <span className="text_3">{ text_section_2 }</span>            
                </h1>
            </div>
            <button className="explore">Explore</button>
            <div className="social_home">
                <div className="icon_social_1">
                    <img src={`.${instagram}` } alt="" className="img_icon_1" />
                </div>
                <div className="icon_social_2">
                    <img src={`.${facebook}`} alt="" className="img_icon_2" />
                </div>
                <div className="icon_social_3">
                    <img src={`.${twitter}`} alt="" className="img_icon_3" />
                </div>
            </div>
        </section>
        </>
    )
}