import ProfilePic from './ProfPic';
import './ContactUs.css';
import '../variables.css'

function ContactUs() {

    return(
        <>
        <div className='section-4' id='contact-us'>
            <div className='cont-bgd-img'></div>
            <div className='cont-img'></div>

            <div className='photo-frame'>
                
                <ProfilePic />

                <div></div>
                <ProfilePic />


            </div>
            
            <div className='cont-text'>
                <h1>&rarr; &nbsp; &nbsp; Contact &nbsp; &nbsp; &larr;</h1>
            <div className='cont-tables'>
                <table>
                    <thead>
                        <tr>
                            <th><h2>Address</h2></th>
                        </tr>
                    </thead>
                    <br />
                    <tbody>
                        <tr>
                            <td>Friendly corner</td>
                        </tr>
                        <tr>
                            <td>Tändsticksgränd 36</td>
                        </tr>
                        <tr>
                            <td>553 15 Jönköpingm</td>
                        </tr>
                    </tbody>
                </table>
                <div className='tbl-spacer'></div>
                <table>
                    <thead>
                        <tr>
                            <th><h2>Contact</h2></th>
                        </tr>
                    </thead>
                    <br />
                    <tbody>
                        <tr>
                            <td>Åsa Andreasson, 0701 47 47 25</td>
                        </tr>
                        <tr>
                            <td>Tinna Ahlander, 0703 14 26 56</td>
                        </tr>
                        <tr>
                            <td><a className='email' href="mailto:info@friendlycorner.se">info@friendlycorner.se</a></td>
                        </tr>
                    </tbody>
                </table>
                <div className='tbl-spacer'></div>
                <table>
                    <thead>
                        <tr>
                            <th><h2>Opening hours</h2></th>
                        </tr>
                    </thead>
                    <br />
                    <tbody>
                        <tr>
                            <td>Monday - Friday</td>
                        </tr>
                        <tr>    
                            <td>08:00 - 17:00</td>
                        </tr>
                        <br />
                        <tr>
                            <td>Saturdays</td>
                        </tr>
                        <tr>    
                            <td>10:00 - 13:00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
        </>
    );

};

export default ContactUs;