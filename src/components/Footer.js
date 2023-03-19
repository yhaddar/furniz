import React, { useState} from "react";
import logo_footer from "../assets/logo.png";
import instagram_footer from "../assets/instagram.svg";
import facebook_footer from "../assets/facebook.svg";
import twitter_footer from "../assets/twitter.svg";


export function Footer () {

    const [title_footer] = useState("Furniz");
    const [parg_footer] = useState("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, voluptates saepe, sunt autem mollitia quasi officiis accusantium repellat explicabo nesciunt aperiam sapiente fuga tempora quod deleniti, nemo adipisci sit. Cupiditate.")

    const contact_footer = [
        {
            id:1,
            title_footer: "Quick links",
            li_1: "Home",
            li_2: "Service",
            li_3: "About Us",
            li_4: "Contact",
        },
        {
            id:2,
            title_footer: "Useful",
            li_1: "Privacy Policy",
            li_2: "Legal",
            li_3: "FAQ's",
            li_4: "Blogs",
        },
    ]
    const [title_follow] = useState("Follow Us");
    const follow_us = [ 
        {
            id: 1,
            social: instagram_footer,
        },
        {
            id: 2,
            social: facebook_footer,
        },
        {
            id: 3,
            social: twitter_footer,
        },
    ]

    return (
        <footer className="footer_contact">
            <div className="aside_1">
                <img src={ `.${logo_footer}` } alt="" className="logo_footer" />
                <h1 className="title_footer">{title_footer}</h1>
                <p className="parg_footer"> {parg_footer} </p>
            </div>
            <div className="aside_2">
                {contact_footer.map((Cf) => {
                    return (
                        <ul className="ul_footer" key={Cf.id}>
                            <h1 className="title_footer_2"> { Cf.title_footer } </h1>
                            <li className="li_footer">
                                <a href={`#${Cf.li_1}`} className="link_footer"> {Cf.li_1} </a>
                            </li>
                            <li className="li_footer">
                                <a href={`#${Cf.li_2}`} className="link_footer"> {Cf.li_2} </a>
                            </li>
                            <li className="li_footer">
                                <a href={`#${Cf.li_3}`} className="link_footer"> {Cf.li_3} </a>
                            </li>
                            <li className="li_footer">
                                <a href={`#${Cf.li_4}`} className="link_footer"> {Cf.li_4} </a>
                            </li>
                        </ul>
                    )
                })}
                <ul className="ul_follow">
                    <h1 className="title_follow"> { title_follow } </h1>
                    {follow_us.map((follow) => {
                        return (
                            <li className="li_follow" key={follow.id}>
                                <img src={ `.${follow.social}` } alt="" className="follow" />
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="copyright">
                <h1 className="title_copyright"> Created  by  y_haddar - 2021</h1>
            </div>
        </footer>
    )
}