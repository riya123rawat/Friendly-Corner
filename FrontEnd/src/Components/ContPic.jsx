import './ContPic.css'

function ContactPic(props) {

    return(
        <>
            <div className="container">
                <img src={props.pic} alt="Avatar" className="image" />
                <div className="overlay">
                        <div className="urlLink"><a href={props.url} target="_blank">{props.title}</a></div>
                </div>
            </div>

        </>
    );
}

export default ContactPic;