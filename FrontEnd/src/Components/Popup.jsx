import './Popup.css';

function PopupLogIn() {

    // const loginPopup = document.querySelector(".login-popup");
    // loginPopup.classList.add("show");


    
    return(
        <>
        <div className="login-popup show">
            <div className="box">
                <div className="img-area">
                    <div className="img"></div>
                    <h1>Your Logo</h1>
                </div>
                <div className="form">
                    <div className="close">&times;</div>
                    <h1>Log In</h1>
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label><input type="checkbox" />Remember Me</label>
                        </div>
                        <button onClick={() => loginPopup.classList.remove("show")} type="button" className="btn">Log In</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default PopupLogIn;