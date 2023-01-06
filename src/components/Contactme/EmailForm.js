import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function EmailForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hlu1i6v', 'template_1g3uhgc', form.current, '0YFCfhhofqR-xM1RO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <form  id="form1" ref={form} onSubmit={sendEmail}>

            <input id="form" type="text" name="user_name" placeholder="Name" />
            <br />
            <input id="form" type="email" name="user_email" placeholder="Email" />
            <br />
            <textarea id="form_message" name="message" placeholder="Message" />
            <br />
            <input type="submit" value="Send" style={{ backgroundColor: "#08962e", width: "55%", height: "25%", border: "1px solid #08962e",color:"#fff", borderRadius: "5px" }} />
        </form>
    );
};

// <div class="highlight waypoint animated slide-in-right" data-animation="slide-in-right" data-delay=".5s" style="animation-delay: 0.5s;">
//             Have a question or want to work together?
//           </div>