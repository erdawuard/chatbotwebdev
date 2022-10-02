import React from 'react';
import ai from '../../assets/167502.jpg';
import './header.css';

const Header = () => (
  <div className="cb__header section__padding" id="home">
    <div className="cb__header-content">
      <h1 className="gradient__text">Welcome to the LearntoCode Chatbot</h1>
      <p>The Chatbot helps you to find the best source for learning programming languages</p>

      <div className="cb__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

    </div>

    <div className="cb__header-image">
      <img src={ai} alt="ai" />
    </div>
  </div>
);

export default Header;