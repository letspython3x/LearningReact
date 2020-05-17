import React from "react"

// props is a strong convention to be used as function parameter, 
// although we ar allowed to use any name.
function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.contact.imgUrl} alt="ContactImage"></img>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

export default ContactCard