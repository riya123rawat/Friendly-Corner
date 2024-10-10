import './ContactUs.css';
import '../variables.css';
import Asa from '../Images/Team/Asa Andreasson.jpg';
import Tina from '../Images/Team/Tina Ahlander.jpg';

import ContactPic from './ContPic';

function ContactUs() {

    return(
        <>
        <div className='section-4' id='contact-us'>
            <div className='cont-bgd-img'></div>
            <div className='cont-img'></div>

            <div className='photo-frame'>
            <ContactPic pic={Asa} title='Kreativa Kvadrat' url={'https://www.kreativakvadrat.com/'} />
            <ContactPic pic={Tina} title='Tina Design' url={'https://tinnadesign.se/'} />
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
                    <thead><tr><th>.</th></tr></thead>
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
                    <thead><tr><th>.</th></tr></thead>
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
                    <thead><tr><th>.</th></tr></thead>
                    <tbody>
                        <tr>
                            <td>Monday - Friday</td>
                        </tr>
                        <tr>    
                            <td>08:00 - 17:00</td>
                        </tr>
                        <tr>    
                            <td> &nbsp; </td>
                        </tr>
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