import './Welcome.css';

function Welcome() {
    var w_width = window.innerWidth;
    console.log(w_width);
    return(
        <>
        <div className='section-0' id='welcome'>
            <div className='wc-bgd-img'></div>
            <div className='wcome-text'>
                <h1>COZY</h1>
                <p>place for creative ideas</p>
            </div>
        </div>  
        </>
    );
}

export default Welcome;