import { useEffect, useRef  } from "react";
import './Galery.css';
import img1 from '../Images/slide/pic-1.jpg';
import img2 from '../Images/slide/pic-2.jpg';
import img3 from '../Images/slide/pic-3.jpg';
import img4 from '../Images/slide/pic-4.jpg';
import img5 from '../Images/slide/pic-5.jpg';
import img6 from '../Images/slide/pic-6.jpg';
import img7 from '../Images/slide/pic-7.jpg';
import img8 from '../Images/slide/pic-8.jpg';
import img9 from '../Images/slide/pic-9.jpg';

function Galery(props) {

  return (
<div className='section-2' id='galery'>
    <div className="slider">
      <div className='slider-track' id={props.dir} >

        {/* <!-- Slides --> */}

        <div className="slide">
            <img src={img1} alt="" />
        </div>
        <div className="slide">
            <img src={img2} alt="" />
        </div>
        <div className="slide">
            <img src={img3} alt="" />
        </div>
        <div className="slide">
            <img src={img4} alt="" />
        </div>
        <div className="slide">
            <img src={img5} alt="" />
        </div>
        <div className="slide">
            <img src={img6} alt="" />
        </div>
        <div className="slide">
            <img src={img7} alt="" />
        </div>
        <div className="slide">
            <img src={img8} alt="" />
        </div>
        <div className="slide">
            <img src={img9} alt="" />
        </div>

        {/* Duplicates */}
         
        <div className="slide">
            <img src={img1} alt="" />
        </div>
        <div className="slide">
            <img src={img2} alt="" />
        </div>
        <div className="slide">
            <img src={img3} alt="" />
        </div>
        <div className="slide">
            <img src={img4} alt="" />
        </div>
        <div className="slide">
            <img src={img5} alt="" />
        </div>
        <div className="slide">
            <img src={img6} alt="" />
        </div>
        <div className="slide">
            <img src={img7} alt="" />
        </div>
        <div className="slide">
            <img src={img8} alt="" />
        </div>
        <div className="slide">
            <img src={img9} alt="" />
        </div>

      </div>
    </div>
</div>
    );
};

export default Galery;
