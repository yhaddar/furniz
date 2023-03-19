import React, { useState  } from "react";
import logo from "../assets/logo.png";




export function Navbar() {
    const [title_logo] = useState("Furniz");
    const nav = ["Home", "Service", "About us", "Contact"];
    
    const search = () => {

        let search_outline = document.querySelector(".search-outline");
        let close_outline = document.querySelector(".close-outline");
        let search_input = document.querySelector(".search");   

        // Btn Search : 
        search_outline.classList.add("search_none");
        close_outline.classList.add("close-block");   

        // Input search : 
        search_input.classList.add("search-add");
        search_input.classList.remove("search-remove");

    }   

    const close = () => {
        
        let search_outline = document.querySelector(".search-outline");
        let close_outline = document.querySelector(".close-outline");
        let search_input = document.querySelector(".search");   

        // Btn Search : 
        search_outline.classList.remove("search_none");
        close_outline.classList.remove("close-block");   

        // Input search : 
        search_input.classList.remove("search-add");
        search_input.classList.add("search-remove");
    
    }
    
    const menu = () => {

        let aside_nav = document.querySelector(".aside-nav");
        let close_outline_2 = document.querySelector(".close-outline-2")
        let menu_outline = document.querySelector(".menu-outline");
        
        //  add menu navbar :
        aside_nav.style.display = "block";
        close_outline_2.style.display = "block";
        menu_outline.style.display = "none";
    }

    const close_2 = () => {

        let aside_nav = document.querySelector(".aside-nav");
        let close_outline_2 = document.querySelector(".close-outline-2")
        let menu_outline = document.querySelector(".menu-outline");
        
        //  remove menu navbar :
        aside_nav.style.display = "none";
        close_outline_2.style.display = "none";
        menu_outline.style.display = "block";
    }
    
    const li_click = () => {

        let aside_nav = document.querySelector(".aside-nav");
        let close_outline_2 = document.querySelector(".close-outline-2")
        let menu_outline = document.querySelector(".menu-outline");
        
        aside_nav.style.display = "none";
        close_outline_2.style.display = "none";
        menu_outline.style.display = "block";
    }

    return (
        <>
            <nav className="Navbar">
                <div className="logo_nav">
                    <img src={ `.${logo}` } alt="" className="logo_img" />
                    <h1 className="logo_text">{title_logo}</h1>
                </div>
                <ul className="ul_nav">
                    {nav.map((item,i) => {
                        return(
                            <li className="li_nav" key={`item-${i + 1}`}>
                                <a className="link_nav"  href={`#${item}`}> {item} </a>
                            </li>
                        )
                    })}
                </ul>
                <div className="search_nav">
                    <input type="search" className="search-remove search" placeholder="Search..." />
                </div>
                <ion-icon name="search-outline" class="search-outline" onClick={search} ></ion-icon>
                <ion-icon name="close-outline" class="close-outline" onClick={close}></ion-icon>
                <ion-icon name="reorder-four-outline" class="menu-outline" onClick={menu}></ion-icon>
                <ion-icon name="close-outline" class="close-outline-2" onClick={close_2}></ion-icon>
                <nav className="aside-nav">
                <ul className="ul_aside-nav">
                    {nav.map((item,i) => {
                        return(
                            <li className="li_aside-nav" key={`item-${i + 1}`} onClick={li_click}>
                                <a className="link_aside-nav"  href={`#${item}`}> {item} </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
                </nav>
        </>
    );
}
