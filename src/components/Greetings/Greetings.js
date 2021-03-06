import React from "react";
import './Greetings.css';

function Greetings(props){

    const languageGreeting = (props) => {
        if(props.lang === "de"){
            return "Hallo"
        } else if(props.lang === "en"){
            return "Hello"
        } else if(props.lang === "es"){
            return "Hola"
        } else if(props.lang === "fr"){
            return "Bonjour"
        }
    }

    return(
        <div className="greeting-container">
            <p>{languageGreeting(props)} {props.children}</p>
        </div>
    )
}

export default Greetings;