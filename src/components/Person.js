import React, { useState} from "react";
import person from "../assets/person.jpg";
import stars from "../assets/stars.png"
export function Person () {

    const [name_person] = useState("Tuấn Kiệt Jr.");
    const [detail_person] = useState("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor at quidem maiores? Incidunt sapiente tempore eaque, facere iste voluptatum ab dicta soluta pariatur odit ipsa itaque quia officiis odio sunt!");

    return (
        <>
            <section className="section_person">
                <div className="person">
                    <div className="img_person" style={{ backgroundImage : `url(.${ person })`}}></div>
                </div>
                <div className="text_person">
                    <h1 className="name_person"> { name_person} </h1>
                    <p className="detail_person"> { detail_person } </p>
                    <div className="stars_person">
                        <img src={ `.${stars}` } alt="" className="stars" />
                        <h1 className="evaluation">9.1</h1>
                    </div>
                </div>
            </section>
        </>
    )
}