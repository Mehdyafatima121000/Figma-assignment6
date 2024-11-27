import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/footer';
import Footer1 from './components/Footer1/Footer1';
import OurTeam from './components/Our team/Ourteam';
import Testimonial from './components/Testimonial/Testimonial';
import Acheivements from './components/Achievments/Achievment';
import Tabs from './components/Tabs/Tabs';
import Courses from './components/Course/Courses';


const Figma : React.FC = ()=> {
  return (
    <div>
      <Header />
      <Hero />
      <Footer1 />
      <OurTeam />
      <Testimonial />
      <Footer />
      <Courses />
      <Tabs/>
      <Acheivements/>
    </div>
  );
};

export default Figma;
