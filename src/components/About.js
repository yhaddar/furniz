import React, { useState } from "react";
import img_8 from "../assets/img-8.jpg";
 
export function About () {
    const [title_about] = useState("About Us");
    const [parg_about] = useState("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quidem tempore consequuntur, cumque voluptate incidunt ad, odit quia molestiae officiis velit inventore consequatur iusto reprehenderit quae libero perferendis mollitia dolore!")
        
    return (
        <>
            <section id="About%20us" className="about">
                <div className="text_about">
                    <h1 className="title_about">{ title_about }</h1>
                    <p className="parg_about">{ parg_about }</p>
                    <p className="parg_about_2">{ parg_about }</p>
                    <button className="explore_about">Explore</button>
                </div>
                <div className="img_about" style={{backgroundImage : `url(.${img_8})`}}></div>
            </section>
        </>
    )
}