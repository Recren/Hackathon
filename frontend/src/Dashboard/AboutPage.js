import {React, useState} from 'react';
import './AboutPage.css'; 
import logo from './about.jpeg';
import '@fortawesome/fontawesome-free/css/all.min.css';

function AboutPage() {
  return (
    <div className='about-content'> 
      <h1> Our Mission Statement</h1>
      <img src={logo} alt="Description of the image" style={{ width: '350px', height: '200px' }} />
      <div className = 'about-paragraph'> 
        <p> Our commitment is to provide a trusted and transparent environment where users can connect, exchange goods, and engage in transactions with confidence. We prioritize safety by implementing a robust verification process, ensuring that every user is connected to their university through their school email. This extra layer of security ensures that our users can buy and sell with peace of mind, knowing they won't fall victim to scams or fraudulent activities. </p>
        <p> We believe that UTDeals is more than just a marketplace; it's a community that fosters trust and reliability, helping students make meaningful connections while navigating the challenges of college life. We're here to make student life easier, more affordable, and above all, safer.</p>
      </div>
    </div>
  );
}

export default AboutPage;