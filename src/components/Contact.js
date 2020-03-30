import React from 'react';
import './Contact.css';

const name = 'Cathy Ramos';
const avatar = 'https://randomuser.me/api/portraits/women/13.jpg';
const online = true;

function Contact() {
    return (
        <div className="Contact">
            <img className="avatar" src={avatar} />
            <div>
                <h4 className="name">
                    {name}
                </h4>
                <div className="status">
                    <div className="status-online"></div>
                    <p className="status-text">{online ? "online" : "offline"}</p>
                    
                    
                </div>

            </div>

        </div>
    );
};


export default Contact;