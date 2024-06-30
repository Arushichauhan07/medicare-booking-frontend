import React from 'react';
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from 'react-router-dom';

const About = () => {
  return (
   <section>
    <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            {/* about img */}
            <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                <img src={aboutImg}></img>
                <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                <img src={aboutCardImg}></img>
                </div>
            </div>
            {/* about content */}
            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='heading'>Proud to be one of the nations best</h2>
                <p className='text__para'>We have treated a lot of patients across the globe and helped a lot of people to live their life back in a better way.
                </p>
                <p className="text__para mt-[30px]">We have our centers located across the globe in multiple countries and we are helping people with their problems.</p>

                <Link to="/"><button className="btn">Learn More</button>
                </Link>
            </div>
        </div>
    </div>
   </section>
  )
}

export default About;
