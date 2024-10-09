import Welcome from './Welcome';
import AboutUs from './AboutUs';
import Prices from './Prices';
import ContactUs from './ContactUs';
import { HashLink } from 'react-router-hash-link';
import Galery from './Galery';
import './Body.css';

function Body() {

  var _dir = '-250px';

  return (
    <>
    <div className="wrapper">

      <Welcome />
      <AboutUs />

      <div>  
        {/* <span className='separator'></span> */}
      </div>

      <div className='galery'>
      <Galery />
      <Galery dir="reverse" />
      </div>

      <Prices />

      <HashLink className='top-link' smooth to="#top">To The Top</HashLink>    

      <ContactUs />
          
      {/* <div className='separator'></div> */}
      <HashLink className='top-link' smooth to="#top">To The Top</HashLink>    
         
    </div>
    </>
  );
};

export default Body;
