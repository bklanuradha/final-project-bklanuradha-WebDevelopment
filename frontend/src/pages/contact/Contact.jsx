import "./contact.css"

export default function Contact() {
    return (
        <div className="contact">
            <div className="contactTitles">
            <div className="contactItem">
                <span className="contactTitle">How To Find Us</span>
               
                <p>
                 If you have any quctions, just send whatsapp massage or email and I will answer you shortly.
                </p>
            </div>
            <div className="contactItem">
            <span className="contactTitle">Contact</span>
            <ul className="contactList">
                <li className="contactListItem">Miss.Anuradha</li>
                <li className="contactListItem"> Office (Rathnapura, Embilipitiya),</li>
                <li className="contactListItem"> Nonagama Roard,</li>
                <li className="contactListItem"> Tunkama</li>
                <li className="contactListItem">lakshmianuradha98@gmail.com</li>
                <li className="contactListItem">+94763051872</li>
            </ul>
            </div>
            <div className="contactItem">
            <span className="contactTitle">FOLLOW US</span>
            <div className="contactSocial">
                <i className="contactIcon fab fa-facebook-square"></i>
                <i className="contactIcon fab fa-twitter-square"></i>
                <i className="contactIcon fab fa-pinterest-square"></i>
                <i className="contactIcon fab fa-instagram-square"></i>
            </div>
            </div>
                
            </div>
        </div>
    )
}
