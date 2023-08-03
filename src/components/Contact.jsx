
import Mail from '../images/mail-icon.png'
import Call from '../images/call-icon.png'

export function Contact(props) {
  
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={Call} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={Mail} />
                <p>{props.email}</p>
            </div>
        </div>
    )
}