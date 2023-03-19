import React , { useState } from "react";
import img_2 from  "../assets/img-2.jpg";
import img_3 from "../assets/img-3.jpg";
import img_4 from  "../assets/img-4.jpg";
import img_5 from "../assets/img-5.jpg";
import img_6 from  "../assets/img-6.jpg";
import img_7 from "../assets/img-7.jpg";

export function Service () {
    
    const [title_text] = useState("HOME INTERIOR");
    const [parg_title] = useState("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quidem tempore consequuntur, cumque voluptate incidunt ad, odit quia molestiae officiis velit inventore consequatur iusto reprehenderit quae libero perferendis mollitia dolore!")
    const [explore_service] = useState("Explore");

    const [title_text_2] = useState("FURNITERS & INTERIOR");

    const [title_text_3] = useState("OFFICE INTERIOR");
    
    return (
        <>
            <section id="Service">
                <div className="img_service">
                    <div className="img_service_1" style={{backgroundImage: `url(.${img_2})`}} ></div>
                    <div className="img_service_2" style={{backgroundImage: `url(.${img_3})`}} ></div>
                </div>
                <div className="text_service">
                    <h1 className="title_service"> {title_text} </h1>
                    <p className="parg_service"> {parg_title} </p>
                    <p className="parg_service"> {parg_title} </p>
                    <button className="explore_service"> {explore_service} </button>
                </div>
            </section>
            <section id="Service">
                <div className="img_service">
                    <div className="img_service_1" style={{backgroundImage: `url(.${img_4})`}} ></div>
                    <div className="img_service_2" style={{backgroundImage: `url(.${img_5})`}} ></div>
                </div>
                <div className="text_service">
                    <h1 className="title_service"> {title_text_2} </h1>
                    <p className="parg_service"> {parg_title} </p>
                    <p className="parg_service"> {parg_title} </p>
                    <button className="explore_service"> {explore_service} </button>
                </div>
            </section>
            <section id="Service">
                <div className="img_service">
                    <div className="img_service_1" style={{backgroundImage: `url(.${img_6})`}} ></div>
                    <div className="img_service_2" style={{backgroundImage: `url(.${img_7})`}} ></div>
                </div>
                <div className="text_service">
                    <h1 className="title_service"> {title_text_3} </h1>
                    <p className="parg_service"> {parg_title} </p>
                    <p className="parg_service"> {parg_title} </p>
                    <button className="explore_service"> {explore_service} </button>
                </div>
            </section>
        </>
    )
}