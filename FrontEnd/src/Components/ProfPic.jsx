import './ProfPic.css';

function ProfilePic(){
    return(
        <div className="container">
            <div className="overlay">
                <div className="urlLink">Hello World</div>
            </div>
            <img src='../src/Images/Team/Asa Andreasson.jpg' alt="Avatar" className="image" />
        </div>
    );
};

export default ProfilePic;