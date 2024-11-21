import './Member.css';

function Member(props) {

    return(
        <>
        <figure className='photo-box'>
                <img src={props.image} alt={props.alt} className="colleague" />
                <figcaption>{props.name}<br />
                    <a href={props.url} target="_blank">{props.address}</a>
                </figcaption>
                <div className='member-overlay text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo architecto provident accusamus eaque, sed magnam tempora ducimus consectetur deserunt reiciendis rem quidem error modi deleniti culpa aspernatur, laborum tempore enim.</div>
        </figure>
        </>
    );

}

export default Member