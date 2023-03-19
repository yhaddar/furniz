import React , { useState} from "react";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import location from "../assets/location.svg";
import contact_Us from "../assets/contact-us.png";


export function Contact () {
    const [Contact] = useState("Contact");
    const contact = [
        {
            id: 1,
            contact_img: phone,
            title_contact: "+1 2345 6789",
        },
        {
            id: 2,
            contact_img: mail,
            title_contact: "contactfurniz@gmail.com",
        },
        {
            id: 3,
            contact_img: location,
            title_contact: "#32, 3rd street, RS way, Varanasi, Uttar Pradesh, India 232101",
        },
    ]
    return (
        <>
            <section id="Contact">
                <div className="contact">
                    <div className="text_contact">
                        <h1 className="title_contact"> {Contact} </h1>
                    </div>
                    <ul className="ul_contact">
                        {contact.map((c) => {
                            return (
                                <li className="li_contact" key={c.id}>
                                    <div className="img_contact" >
                                        <img src={ `.${c.contact_img}` } alt="" className="img" />
                                    </div>
                                    <h1 className="h1_contact"> {c.title_contact} </h1>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="contactUs" style={{backgroundImage: `url(.${contact_Us})`}}></div>
            </section>
        </>
    )
}